import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, Timestamp }      from 'firebase-admin/firestore';
import { Resend }                        from 'resend';
import crypto                            from 'crypto';

if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId:    process.env.FIREBASE_PROJECT_ID,
      clientEmail:  process.env.FIREBASE_CLIENT_EMAIL,
      privateKey:   process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

const db     = getFirestore();
const resend = new Resend(process.env.RESEND_API_KEY);

const TOKEN_TTL_HOURS = 24;
const APP_URL         = process.env.VITE_APP_URL;
const FROM_EMAIL      = process.env.FROM_EMAIL ?? 'onboarding@resend.dev';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body ?? {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Email inválido.' });
  }

  try {
    const token    = crypto.randomUUID();
    const now      = Timestamp.now();
    const expireAt = Timestamp.fromMillis(
      now.toMillis() + TOKEN_TTL_HOURS * 60 * 60 * 1000
    );

    await db.collection('access_tokens').doc(token).set({
      email,
      token,
      createdAt: now,
      expireAt,
      used: false,
    });

    await db.collection('access_requests').doc(email).set({
      email,
      lastRequestAt: now,
      status: 'sent',
    }, { merge: true });

    const accessUrl = `${APP_URL}/access?token=${token}`;

    await resend.emails.send({
      from:    FROM_EMAIL,
      to:      email,
      subject: 'Tu acceso al portafolio de Nadia Zurita',
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:2rem;background:#09090f;color:#f1f0ff;border-radius:12px">
          <h2 style="color:#a78bfa;margin-bottom:1rem">Acceso al portafolio</h2>
          <p style="color:#8b8ba0;margin-bottom:1.5rem">
            Has solicitado acceso al portafolio de
            <strong style="color:#f1f0ff">Nadia Zurita</strong>.
            El siguiente link es válido por
            <strong style="color:#67e8f9">24 horas</strong>.
          </p>
          <a href="${accessUrl}"
             style="display:inline-block;padding:12px 24px;background:#7c3aed;color:#fff;border-radius:8px;text-decoration:none;font-weight:500">
            Ver portafolio completo →
          </a>
          <p style="margin-top:1.5rem;font-size:12px;color:#8b8ba0">
            Si no solicitaste este acceso, ignora este correo.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error('[requestAccess]', err);
    return res.status(500).json({ error: 'Error interno. Intenta nuevamente.' });
  }
}

import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, Timestamp }      from 'firebase-admin/firestore';

if (!getApps().length) {
  const privateKey = process.env.FIREBASE_PRIVATE_KEY
    ?.replace(/\\n/g, '\n')
    ?.replace(/\\r/g, '\r');
  
  initializeApp({
    credential: cert({
      projectId:   process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey:  privateKey,
    }),
  });
}

const db = getFirestore();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token } = req.body ?? {};

  if (!token) {
    return res.status(400).json({ valid: false, reason: 'Token requerido.' });
  }

  try {
    const ref  = db.collection('access_tokens').doc(token);
    const snap = await ref.get();

    if (!snap.exists) {
      return res.status(200).json({ valid: false, reason: 'Token no encontrado.' });
    }

    const data = snap.data();

    if (data.used) {
      return res.status(200).json({ valid: false, reason: 'Este link ya fue utilizado.' });
    }

    const now      = Timestamp.now().toMillis();
    const expireAt = data.expireAt?.toMillis?.() ?? 0;

    if (now > expireAt) {
      return res.status(200).json({ valid: false, reason: 'Este link ha expirado (24 h).' });
    }

    await ref.update({
      used:   true,
      usedAt: Timestamp.now(),
    });

    await db.collection('portfolio_views').doc(`${data.email}_${Date.now()}`).set({
      email:    data.email,
      viewedAt: Timestamp.now(),
    });

    return res.status(200).json({ valid: true, email: data.email });

  } catch (err) {
    console.error('[validateToken]', err);
    return res.status(500).json({ valid: false, reason: 'Error al validar el acceso.' });
  }
}

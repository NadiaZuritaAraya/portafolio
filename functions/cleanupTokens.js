const { onSchedule } = require('firebase-functions/v2/scheduler');
const { getFirestore, Timestamp } = require('firebase-admin/firestore');
const { getApps, initializeApp }  = require('firebase-admin/app');

if (!getApps().length) initializeApp();

const db = getFirestore();

exports.cleanupTokens = onSchedule(
  { schedule: 'every 1 hours', region: 'us-central1' },
  async () => {
    const now = Timestamp.now();

    const snap = await db
      .collection('access_tokens')
      .where('expireAt', '<', now)
      .get();

    if (snap.empty) {
      console.log('[cleanupTokens] Nada que limpiar.');
      return;
    }

    const batch = db.batch();
    snap.docs.forEach((d) => batch.delete(d.ref));
    await batch.commit();

    console.log(`[cleanupTokens] Eliminados ${snap.size} tokens expirados.`);
  },
);

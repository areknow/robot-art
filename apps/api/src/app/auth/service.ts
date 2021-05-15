import admin = require('firebase-admin');

export const isAdmin = async (token) => {
  const decodedToken = await admin.auth().verifyIdToken(token);
  return decodedToken.uid === process.env.FIREBASE_ADMIN_ID;
};

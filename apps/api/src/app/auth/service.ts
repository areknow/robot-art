import admin = require('firebase-admin');

export const decodeToken = async (token: string) => {
  return await admin.auth().verifyIdToken(token);
};

export const isAuthenticated = async (token: string) => {
  try {
    const decodedToken = await decodeToken(token);
    return decodedToken ? true : false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const isAdmin = async (token: string) => {
  const decodedToken = await decodeToken(token);
  return decodedToken.uid === process.env.FIREBASE_ADMIN_ID;
};

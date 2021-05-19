import admin = require('firebase-admin');

/** Decode the token through firebase. */
export const decodeToken = async (token: string) => {
  try {
    return await admin.auth().verifyIdToken(token);
  } catch (error) {
    console.log(error);
    return null;
  }
};

/** Check if token is decoded successfully. */
export const isAuthenticated = async (token: string) => {
  try {
    const decodedToken = await decodeToken(token);
    return decodedToken ? true : false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/** Check if decoded token matches admin ID. */
export const isAdmin = async (token: string) => {
  try {
    const decodedToken = await decodeToken(token);
    return decodedToken.uid === process.env.FIREBASE_ADMIN_ID;
  } catch (error) {
    console.log(error);
    return false;
  }
};

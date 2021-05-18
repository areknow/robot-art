import axios from 'axios';
import { useEffect, useState } from 'react';
import { firebaseAuth } from '../constants';

interface FirebaseUser {
  uid: string;
  photoURL: string;
  email: string;
  stsTokenManager: {
    accessToken: string;
  };
}

/**
 * The firebase authenticated hook provides information about the user
 * and whether or not they are currently authenticated in session.
 * @returns auth conditional and user payload from firebase.
 */
export const useFirebaseAuthenticated = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState('');

  /** Watches for the firebase state change and sets the internal state. */
  firebaseAuth().onAuthStateChanged(async (user) => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  /** Store the JSON-serializable representation of the firebase user class. */
  const user = firebaseAuth().currentUser?.toJSON() as FirebaseUser;

  /** Effect: when the user object changes, store the user id for use in services. */
  useEffect(() => {
    if (user) {
      setUserId(user?.uid);
      // Add the user access token to the authorization header for requests.
      axios.defaults.headers.common = {
        Authorization: user?.stsTokenManager?.accessToken,
      };
    }
    // Clean up hook when unmounted.
    return () => setUserId('');
  }, [user]);

  return { authenticated, userId, user };
};

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

export const useFirebaseAuthenticated = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState('');

  firebaseAuth().onAuthStateChanged(async (user) => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  const user = firebaseAuth().currentUser?.toJSON() as FirebaseUser;
  useEffect(() => {
    if (user) {
      setUserId(user?.uid);
      axios.defaults.headers.common = {
        Authorization: user?.stsTokenManager?.accessToken,
      };
    }
    return () => setUserId('');
  }, [user]);

  return { authenticated, userId, user };
};

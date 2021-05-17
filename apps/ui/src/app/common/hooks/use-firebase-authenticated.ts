import axios from 'axios';
import { useEffect, useState } from 'react';
import { firebaseAuth } from '../constants';

interface FirebaseUser {
  stsTokenManager: {
    accessToken: string;
  };
}

export const useFirebaseAuthenticated = () => {
  const [authenticated, setAuthenticated] = useState(false);

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
      axios.defaults.headers.common = {
        Authorization: user?.stsTokenManager?.accessToken,
      };
    }
  }, [user]);

  return { authenticated };
};

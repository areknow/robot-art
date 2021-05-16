import { useState } from 'react';
import { firebaseAuth } from '../constants';

export const useFirebaseAuthenticated = () => {
  const [authenticated, setAuthenticated] = useState(false);
  firebaseAuth().onAuthStateChanged((user) => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });
  return { authenticated };
};

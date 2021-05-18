import axios from 'axios';
import { useEffect, useState } from 'react';
import { environment } from '../../../environments/environment';
import { useFirebaseAuthenticated } from './use-firebase-authenticated';

export const useFirebaseAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { authenticated } = useFirebaseAuthenticated();

  useEffect(() => {
    async function fetch() {
      if (authenticated) {
        const response = await axios.get(`${environment.endpoint}/api/status`);
        setIsAdmin(response.data.isAdmin);
      }
    }
    fetch();
    return () => setIsAdmin(false);
  }, [authenticated]);

  return { isAdmin };
};

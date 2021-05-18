import axios from 'axios';
import { useEffect, useState } from 'react';
import { environment } from '../../../environments/environment';
import { useFirebaseAuthenticated } from './use-firebase-authenticated';

/**
 * The firebase admin hook provides conditional admin data.
 * The hook requests the admin status from the api and stores it in state.
 * @returns admin conditional.
 */
export const useFirebaseAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { authenticated } = useFirebaseAuthenticated();

  /** Effect: when the firebase authenticated prop changes, check if the user is admin or not */
  useEffect(() => {
    (async () => {
      if (authenticated) {
        const response = await axios.get(`${environment.endpoint}/api/status`);
        setIsAdmin(response.data.isAdmin);
      }
    })();
    // Clean up hook when unmounted.
    return () => setIsAdmin(false);
  }, [authenticated]);

  return { isAdmin };
};

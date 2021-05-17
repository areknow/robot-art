import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFirebaseAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function fetch() {
      const response = await axios.get('/api/status');
      setIsAdmin(response.data.isAdmin);
    }
    fetch();
    return () => setIsAdmin(false);
  }, []);

  return { isAdmin };
};

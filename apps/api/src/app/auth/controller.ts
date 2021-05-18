import { isAdmin } from './service';

/** Check if the user is an admin. */
export const checkAdminStatus = async (req, res) => {
  res.status(200).json({ isAdmin: await isAdmin(req.headers.authorization) });
};

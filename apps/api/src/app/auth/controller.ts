import { isAdmin } from './service';

export const checkAdminStatus = async (req, res) => {
  res.status(200).json({ isAdmin: await isAdmin(req.headers.authorization) });
};

import { isAdmin } from './service';

export const checkStatus = async (req, res) => {
  res.status(200).json({ isAdmin: await isAdmin(req.body.idToken) });
};

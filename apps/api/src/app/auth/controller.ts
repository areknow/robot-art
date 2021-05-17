import { isAdmin } from './service';

//TODO: need this?
export const checkStatus = async (req, res) => {
  res.status(200).json({ isAdmin: await isAdmin(req.body.idToken) });
};

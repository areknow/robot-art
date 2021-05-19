import { Request, Response } from 'express';
import { isAdmin } from './service';

/** Check if the user is an admin. */
export const checkAdminStatus = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ isAdmin: await isAdmin(req.headers.authorization) });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

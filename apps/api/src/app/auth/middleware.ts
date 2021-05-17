import { NextFunction, Request, Response } from 'express';
import { isAuthenticated } from './service';

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (await isAuthenticated(req.headers.authorization)) {
    return next();
  } else {
    const errorMessage = 'Unauthorized request.';
    const err = new Error(errorMessage);
    res.status(401).send({ error: errorMessage });
    next(err);
  }
};

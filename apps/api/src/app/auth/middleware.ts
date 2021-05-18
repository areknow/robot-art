import { NextFunction, Request, Response } from 'express';
import { isAdmin, isAuthenticated } from './service';

export const authGuard = async (
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

export const adminGuard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (await isAdmin(req.headers.authorization)) {
    return next();
  } else {
    const errorMessage = 'Forbidden request.';
    const err = new Error(errorMessage);
    res.status(403).send({ error: errorMessage });
    next(err);
  }
};

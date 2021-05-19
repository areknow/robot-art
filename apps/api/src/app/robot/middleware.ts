import { NextFunction, Request, Response } from 'express';
import { hasVotedForRobot } from './service';

/** Middleware to prevent user from voting for same robot. */
export const votedGuard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const voted = await hasVotedForRobot(
    req.headers.authorization,
    req.params.id
  );
  if (!voted) {
    return next();
  } else {
    const errorMessage = `User has already voted for ${req.params.id}.`;
    const err = new Error(errorMessage);
    res.status(403).send({ error: errorMessage });
    next(err);
  }
};

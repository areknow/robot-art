import * as express from 'express';
import { adminGuard, authGuard, checkAdminStatus } from '../auth';
import {
  addRobot,
  deleteRobot,
  editRobot,
  getRobots,
  votedGuard,
  voteForRobotById,
} from '../robot';

export const router = express.Router();

/** Robots */
router.get('/robots', authGuard, getRobots);
router.put('/vote-robot/:id', [authGuard, votedGuard], voteForRobotById);

/** Robots (admin) */
router.post('/add-robot', [authGuard, adminGuard], addRobot);
router.patch('/edit-robot/:id', [authGuard, adminGuard], editRobot);
router.delete('/delete-robot/:id', [authGuard, adminGuard], deleteRobot);

/** Auth */
router.get('/status', authGuard, checkAdminStatus);

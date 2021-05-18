import * as express from 'express';
import { checkAdminStatus } from '../auth';
import { adminGuard, authGuard } from '../auth/middleware';
import {
  addRobot,
  deleteRobot,
  editRobot,
  getRobotById,
  getRobots,
  voteForRobotById,
} from '../robot';

export const router = express.Router();

/** Robots */
router.get('/robots', authGuard, getRobots);
router.get('/robot/:id', authGuard, getRobotById);
router.put('/vote-robot/:id', authGuard, voteForRobotById);
/** Robots (admin) */
router.post('/add-robot', [authGuard, adminGuard], addRobot);
router.patch('/edit-robot/:id', [authGuard, adminGuard], editRobot);
router.delete('/delete-robot/:id', [authGuard, adminGuard], deleteRobot);

/** Auth */
router.get('/status', authGuard, checkAdminStatus);

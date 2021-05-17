import * as express from 'express';
import { checkStatus } from '../auth';
import { authMiddleware } from '../auth/middleware';
import {
  addRobot,
  deleteRobot,
  getRobotById,
  getRobots,
  voteForRobotById,
} from '../robot';
export const router = express.Router();

/** Robots */
router.get('/robots', authMiddleware, getRobots);
router.get('/robot/:id', authMiddleware, getRobotById);
router.post('/add-robot', authMiddleware, addRobot);
router.put('/vote-robot/:id', authMiddleware, voteForRobotById);
router.delete('/delete-robot/:id', authMiddleware, deleteRobot);

/** Auth */
router.get('/status', authMiddleware, checkStatus);

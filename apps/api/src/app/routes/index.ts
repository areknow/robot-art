import * as express from 'express';
import { checkStatus } from '../auth';
import { authMiddleware } from '../auth/middleware';
import { addRobot, getRobotById, getRobots, voteForRobotById } from '../robot';
export const router = express.Router();

/** Robots */
router.get('/robots', authMiddleware, getRobots);
router.get('/robot/:id', authMiddleware, getRobotById);
router.post('/add-robot', authMiddleware, addRobot);
router.put('/vote-robot/:id', authMiddleware, voteForRobotById);

/** Auth */
router.get('/status', authMiddleware, checkStatus);

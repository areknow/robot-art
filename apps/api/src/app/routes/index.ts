import * as express from 'express';
import { checkStatus } from '../auth';
import { addRobot, getRobotById, getRobots, voteForRobotById } from '../robot';
export const router = express.Router();

/** Robots */
router.get('/robots', getRobots);
router.get('/robot/:id', getRobotById);
router.post('/add-robot', addRobot);
router.put('/vote-robot/:id', voteForRobotById);

/** Auth */
router.post('/status', checkStatus);

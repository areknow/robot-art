import * as express from 'express';
import { checkStatus } from '../auth';
import { addRobot, getRobotById, getRobots } from '../robot';
export const router = express.Router();

/** Robots */
router.get('/robots', getRobots);
router.get('/robot/:id', getRobotById);
router.post('/add-robot', addRobot);

/** Auth */
router.post('/status', checkStatus);

import * as express from 'express';
import { addRobot, getRobotById, getRobots } from '../robot';
export const router = express.Router();

router.get('/robots', getRobots);
router.get('/robot/:id', getRobotById);
router.post('/add-robot', addRobot);

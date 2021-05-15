import * as express from 'express';
import { getRobotById, getRobots } from '../robot/controller';
export const router = express.Router();

router.get('/robots', getRobots);
router.get('/robot/:id', getRobotById);

import * as express from 'express';
import { getRobots } from '../robot/controller';
export const router = express.Router();

router.get('/robots', getRobots);

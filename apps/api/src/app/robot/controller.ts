import { Request, Response } from 'express';
import {
  addDocumentToCollection,
  getDocumentFromCollection,
  getDocumentsFromCollection,
  updateDocumentInCollection,
} from '../db/service';
import { COLLECTION } from './constants';

/**
 * Get all robots
 * @returns list of robots
 */
export const getRobots = async (req: Request, res: Response) => {
  try {
    return res.status(200).send(await getDocumentsFromCollection(COLLECTION));
  } catch (error) {
    return res.status(500).send(error);
  }
};

/**
 * Get unique robot by id
 * @returns single robot
 */
export const getRobotById = async (req: Request, res: Response) => {
  try {
    return res
      .status(200)
      .send(await getDocumentFromCollection(COLLECTION, req.params.id));
  } catch (error) {
    return res.status(500).send(error);
  }
};

/**
 * Create new robot entry
 * @returns list of robots
 */
export const addRobot = async (req: Request, res: Response) => {
  try {
    await addDocumentToCollection(COLLECTION, {
      name: req.body.name,
      image: req.body.image,
    });
    return res.status(200).send(await getDocumentsFromCollection(COLLECTION));
  } catch (error) {
    return res.status(500).send(error);
  }
};

/**
 * Increment the vote count for a unique robot
 * @returns list of robots
 */
export const voteForRobotById = async (req: Request, res: Response) => {
  try {
    await updateDocumentInCollection(COLLECTION, req.params.id);
    return res.status(200).send(await getDocumentsFromCollection(COLLECTION));
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

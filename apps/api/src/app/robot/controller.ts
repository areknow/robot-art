import { Request, Response } from 'express';
import { decodeToken } from '../auth';
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
      votes: 0,
      voters: [],
    });
    return res.status(200).send(await getDocumentsFromCollection(COLLECTION));
  } catch (error) {
    return res.status(500).send(error);
  }
};

/**
 * Increment the vote count for a unique robot and update voters list
 * Only allows voting if the voter is not already in the voters list
 * @returns list of robots
 */
export const voteForRobotById = async (req: Request, res: Response) => {
  try {
    const document = await getDocumentFromCollection(COLLECTION, req.params.id);
    const updateData = {
      votes: document.votes + 1,
      voters: document.voters,
    };
    const user = await decodeToken(req.headers.authorization);
    if (document.voters.includes(user.uid)) {
      const errorMessage = `User ${user.uid} has already voted for robot ${req.params.id}.`;
      return res.status(500).send({ error: errorMessage });
    } else {
      updateData.voters.push(user.uid);
      await updateDocumentInCollection(COLLECTION, req.params.id, updateData);
      return res.status(200).send(await getDocumentsFromCollection(COLLECTION));
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

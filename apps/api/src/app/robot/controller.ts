import { Request, Response } from 'express';
import { db } from '../db';

/**
 * Get all robots
 * @param req
 * @param res
 * @returns
 */
export const getRobots = async (req: Request, res: Response) => {
  try {
    const query = db.collection('robots');
    const response = [];
    await query.get().then((querySnapshot) => {
      const docs = querySnapshot.docs;
      for (const doc of docs) {
        const selectedItem = {
          id: doc.id,
          ...doc.data(),
        };
        response.push(selectedItem);
      }
    });
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
};

/**
 * Get unique robot by id
 * @param req
 * @param res
 * @returns
 */
export const getRobotById = async (req: Request, res: Response) => {
  try {
    const document = db.collection('robots').doc(req.params.id);
    const item = await document.get();
    const response = item.data();
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
};

/**
 * Create new robot entry
 * @param req
 * @param res
 * @returns
 */
export const addRobot = async (req: Request, res: Response) => {
  try {
    await db
      .collection('robots')
      .add({ name: req.body.name, image: req.body.image });
    return res.status(200).send();
  } catch (error) {
    return res.status(500).send(error);
  }
};

/**
 * Increment the vote count for a unique robot
 * @param req
 * @param res
 * @returns
 */
export const voteForRobotById = async (req: Request, res: Response) => {
  try {
    const document = db.collection('robots').doc(req.params.id);
    const item = await document.get();
    console.log(item.data().votes);
    await document.update({
      votes: item.data().votes + 1,
    });
    return res.status(200).send();
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

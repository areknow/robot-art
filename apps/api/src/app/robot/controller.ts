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
    const query = db.collection('items');
    const response = [];
    await query.get().then((querySnapshot) => {
      const docs = querySnapshot.docs;
      for (const doc of docs) {
        const selectedItem = {
          id: doc.id,
          item: doc.data().item,
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
    const document = db.collection('items').doc(req.params.id);
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
    await db.collection('items').add({ item: req.body.item });
    return res.status(200).send();
  } catch (error) {
    return res.status(500).send(error);
  }
};

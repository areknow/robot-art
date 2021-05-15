import { db } from '../db';

/**
 * Get all robots
 * @param req
 * @param res
 * @returns
 */
export const getRobots = async (req, res) => {
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
export const getRobotById = async (req, res) => {
  try {
    const document = db.collection('items').doc(req.params.id);
    const item = await document.get();
    const response = item.data();
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

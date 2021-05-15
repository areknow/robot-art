import { db } from '../db';

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

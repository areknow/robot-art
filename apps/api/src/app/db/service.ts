import { db } from '../db';

/**
 * Get all documents in a collection.
 * @param collection The collection to query.
 */
export const getDocumentsFromCollection = async (collection: string) => {
  const query = db.collection(collection);
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
  return response;
};

/**
 * Get a single document in a collection.
 * @param collection The collection to query.
 * @param id The ID of the document.
 */
export const getDocumentFromCollection = async (
  collection: string,
  id: string
) => {
  const document = db.collection(collection).doc(id);
  const item = await document.get();
  return item.data();
};

/**
 * Add a document to a collection.
 * @param collection The collection to modify.
 * @param document The document contents.
 */
export const addDocumentToCollection = async (
  collection: string,
  document: FirebaseFirestore.DocumentData
) => {
  await db.collection(collection).add(document);
};

/**
 * Add a document with custom ID to a collection.
 * @param collection The collection to modify.
 * @param customId The custom ID for the new document.
 * @param document The document contents.
 */
export const addDocumentToCollectionWithCustomId = async (
  collection: string,
  customId: string,
  document: FirebaseFirestore.DocumentData
) => {
  await db.collection(collection).doc(customId).set(document);
};

/**
 * Delete a single document from a collection.
 * @param collection The collection to modify.
 * @param id The ID of the document.
 */
export const deleteDocumentById = async (collection: string, id: string) => {
  await db.collection(collection).doc(id).delete();
};

/**
 * Update a document in a collection.
 * @param collection The collection to modify.
 * @param id The ID of the document.
 */
export const updateDocumentInCollection = async (
  collection: string,
  id: string,
  updateData: FirebaseFirestore.DocumentData
) => {
  const document = db.collection(collection).doc(id);
  await document.update(updateData);
};

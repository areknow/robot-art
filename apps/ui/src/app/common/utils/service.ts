import { Robot } from '@robot-art/api-interfaces';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { storage } from '../constants/firebase';
import { generateRandomHash } from './generate-hash';

/**
 * Collection of service calls for making requests in the application.
 */

/**
 * Get a list of all robots.
 * @returns List of all robots.
 */
export const getRobots = () => {
  return axios.get<Robot[]>(`${environment.endpoint}/api/robots`);
};

/**
 * Vote for a robot by ID.
 * @param id The ID of the robot to vote for.
 * @returns List of all robots.
 */
export const voteForRobot = (id: string) => {
  return axios.put(`${environment.endpoint}/api/vote-robot/${id}`);
};

/**
 * Add a new robot.
 * @param name The name of the new robot being created.
 * @param image The uploaded image identifier of the new robot.
 * @returns List of all robots.
 */
export const addRobot = (name: string, image: string) => {
  return axios.post(`${environment.endpoint}/api/add-robot`, { name, image });
};

/**
 * Delete a unique robot by ID.
 * @param id The ID of the robot being deleted.
 * @returns List of all robots.
 */
export const deleteRobot = (id: string) => {
  return axios.delete(`${environment.endpoint}/api/delete-robot/${id}`);
};

/**
 * Edit a unique robot by ID.
 * @param id The ID of the robot being deleted.
 * @param name The name of the new robot being created.
 * @param image The uploaded image identifier of the new robot.
 * @returns List of all robots.
 */
export const editRobot = (id: string, name: string, image: string) => {
  return axios.patch(`${environment.endpoint}/api/edit-robot/${id}`, {
    name,
    image,
  });
};

/**
 * Upload a image to firebase storage.
 * @param file The file contents.
 * @returns The unique hash of the stored file.
 */
export const storeImage = async (file: File) => {
  const hash = generateRandomHash();
  await storage.child(hash).put(file);
  return hash;
};

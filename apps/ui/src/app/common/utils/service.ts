import { Robot } from '@robot-art/api-interfaces';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { storage } from '../constants/firebase';
import { generateRandomHash } from './generate-hash';

export const getRobots = () => {
  console.log(`${environment.endpoint}/api/robots`);
  return axios.get<Robot[]>(`${environment.endpoint}/api/robots`);
};

export const voteForRobot = (id: string) => {
  return axios.put(`${environment.endpoint}/api/vote-robot/${id}`);
};

export const addRobot = (name: string, image: string) => {
  return axios.post(`${environment.endpoint}/api/add-robot`, { name, image });
};

export const deleteRobot = (id: string) => {
  return axios.delete(`${environment.endpoint}/api/delete-robot/${id}`);
};

export const editRobot = (id: string, name: string, image: string) => {
  return axios.patch(`${environment.endpoint}/api/edit-robot/${id}`, {
    name,
    image,
  });
};

export const storeImage = async (file: File) => {
  const hash = generateRandomHash();
  await storage.child(hash).put(file);
  return hash;
};

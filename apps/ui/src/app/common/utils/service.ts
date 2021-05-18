import { Robot } from '@robot-art/api-interfaces';
import axios from 'axios';
import { storage } from '../constants/firebase';
import { generateRandomHash } from './generate-hash';

export const getRobots = () => {
  return axios.get<Robot[]>('/api/robots');
};

export const voteForRobot = (id: string) => {
  return axios.put(`/api/vote-robot/${id}`);
};

export const addRobot = (name: string, image: string) => {
  return axios.post('/api/add-robot', { name, image });
};

export const deleteRobot = (id: string) => {
  return axios.delete(`/api/delete-robot/${id}`);
};

export const editRobot = (id: string, name: string, image: string) => {
  return axios.patch(`/api/edit-robot/${id}`, { name, image });
};

export const storeImage = async (file: File) => {
  const hash = generateRandomHash();
  await storage.child(hash).put(file);
  return hash;
};

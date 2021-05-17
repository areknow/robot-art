import { Robot } from '@robot-art/api-interfaces';
import axios from 'axios';

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

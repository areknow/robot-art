import { Robot } from '@robot-art/api-interfaces';
import axios from 'axios';

export const getRobots = () => {
  return axios.get<Robot[]>('/api/robots');
};

export const voteForRobot = (id: string) => {
  return axios.put(`/api/vote-robot/${id}`);
};

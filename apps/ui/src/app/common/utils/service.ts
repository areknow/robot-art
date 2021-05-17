import { Robot } from '@robot-art/api-interfaces';
import axios from 'axios';
import { storage } from '../../common/constants';

export const getRobots = () => {
  return axios.get<Robot[]>('/api/robots');
};

export const getRobotImageUrl = (image: string): Promise<string> => {
  return storage.child(image).getDownloadURL();
};

export const voteForRobot = (id: string) => {
  axios.put(`/api/vote-robot/${id}`);
};

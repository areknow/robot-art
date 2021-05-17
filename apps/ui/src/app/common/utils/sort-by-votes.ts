import { Robot } from '@robot-art/api-interfaces';

export const sortByVoteCount = (list: Robot[]) => {
  return list.sort((a, b) => b.votes - a.votes);
};

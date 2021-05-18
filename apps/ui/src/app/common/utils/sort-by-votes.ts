import { Robot } from '@robot-art/api-interfaces';
/**
 * Sort an array of robots by their vote count.
 * @param list The list of robots to sort.
 * @returns The list of sorted robots.
 */
export const sortByVoteCount = (list: Robot[]) => {
  return list.sort((a, b) => b.votes - a.votes);
};

import { Robot } from '@robot-art/api-interfaces';

/**
 * Sort an array of robots by their names.
 * @param list The list of robots to sort.
 * @returns The list of sorted robots.
 */
export const sortByName = (list: Robot[]) => {
  return list.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });
};

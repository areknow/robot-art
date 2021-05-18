import { Robot } from '@robot-art/api-interfaces';
import { storage } from '../../common/constants';

/**
 * Helper function to map over robots array and convert the image
 * hash to a usable image url with the embedded access token.
 * @param robots
 * @returns robots with images
 */
export const combineRobotsWithImages = (robots: Robot[]) => {
  try {
    const dataWithImages = robots.map(async (robot) => {
      return {
        ...robot,
        imageUrl: await storage.child(robot.image).getDownloadURL(),
      };
    });
    return Promise.all(dataWithImages);
  } catch (error) {
    console.log(error);
    return [];
  }
};

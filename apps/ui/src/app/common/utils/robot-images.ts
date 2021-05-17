import { Robot } from '@robot-art/api-interfaces';
import { storage } from '../../common/constants';

export const combineRobotsWithImages = (robots: Robot[]) => {
  const dataWithImages = robots.map(async (robot) => {
    return {
      ...robot,
      imageUrl: await storage.child(robot.image).getDownloadURL(),
    };
  });
  return Promise.all(dataWithImages);
};

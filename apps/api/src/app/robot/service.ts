import { Robot } from '@robot-art/api-interfaces';
import { decodeToken } from '../auth';
import {
  getDocumentFromCollection,
  getDocumentsFromCollection,
  updateDocumentInCollection
} from '../db/service';
import { Collection } from './constants';

/**
 * Combine an array of robots with voted data.
 * Voted data is whether the current user has voted for that specific robot.
 * @param token The access token for the current user.
 * @param robots The list of robots to be combined with voted data.
 * @returns List of robots with additional voted data.
 */
export const robotsWithVoted = async (token: string, collection: string) => {
  try {
    const robots = await getDocumentsFromCollection(collection);
    const mappedBots = robots.map(async (robot: Robot) => {
      return {
        ...robot,
        voted: await hasVotedForRobot(token, robot.id),
      };
    });
    return await Promise.all(mappedBots);
  } catch (error) {
    console.log(error);
    return [];
  }
};

/**
 * Check if the current request user has voted for a specific robot.
 * @param token The access token for the current user.
 * @param robotId The ID of the robot that is being investigated.
 * @returns Whether or not the robot has been voted for by current user.
 */
export const hasVotedForRobot = async (token: string, robotId: string) => {
  try {
    const user = await decodeToken(token);
    const doc = await getDocumentFromCollection(Collection.USERS, user.uid);
    if (doc && doc.votedFor) {
      return doc.votedFor === robotId;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * Modify the vote count value of a unique robot.
 * @param increment Whether or not the count should go up or down.
 * @param robotId The ID of the robot that is being investigated.
 */
export const changeRobotVote = async (increment: boolean, robotId: string) => {
  try {
    const document = await getDocumentFromCollection(
      Collection.ROBOTS,
      robotId
    );
    const updateData = {
      votes: increment ? document.votes + 1 : document.votes - 1,
    };
    await updateDocumentInCollection(Collection.ROBOTS, robotId, updateData);
  } catch (error) {
    console.log(error);
  }
};

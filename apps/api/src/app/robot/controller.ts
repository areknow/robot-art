import { Request, Response } from 'express';
import { decodeToken } from '../auth';
import {
  addDocumentToCollection,
  addDocumentToCollectionWithCustomId,
  deleteDocumentById,
  getDocumentFromCollection,
  updateDocumentInCollection,
} from '../db/service';
import { Collection } from './constants';
import { changeRobotVote, robotsWithVoted } from './service';

/**
 * Get all robots.
 * @returns list of robots.
 */
export const getRobots = async (req: Request, res: Response) => {
  try {
    // Get list of robots with voted property for current user
    const robots = await robotsWithVoted(
      req.headers.authorization,
      Collection.ROBOTS
    );
    return res.status(200).send(robots);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

/**
 * Create new robot entry.
 * @returns list of robots.
 */
export const addRobot = async (req: Request, res: Response) => {
  try {
    // Add the new robot to the database
    await addDocumentToCollection(Collection.ROBOTS, {
      name: req.body.name,
      image: req.body.image,
      votes: 0,
    });
    // Get list of robots with voted property for current user
    const robots = await robotsWithVoted(
      req.headers.authorization,
      Collection.ROBOTS
    );
    return res.status(200).send(robots);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

/**
 * Edit a robot data.
 * @returns list of robots.
 */
export const editRobot = async (req: Request, res: Response) => {
  try {
    // Update the existing robot in the database
    await updateDocumentInCollection(
      Collection.ROBOTS,
      req.params.id,
      req.body
    );
    // Get list of robots with voted property for current user
    const robots = await robotsWithVoted(
      req.headers.authorization,
      Collection.ROBOTS
    );
    return res.status(200).send(robots);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

/**
 * Remove a robot.
 * @returns list of robots.
 */
export const deleteRobot = async (req: Request, res: Response) => {
  try {
    // Delete the existing robot in the database
    await deleteDocumentById(Collection.ROBOTS, req.params.id);
    // Get list of robots with voted property for current user
    const robots = await robotsWithVoted(
      req.headers.authorization,
      Collection.ROBOTS
    );
    return res.status(200).send(robots);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

/**
 * Vote for a robot.
 * @returns list of robots.
 */
export const voteForRobotById = async (req: Request, res: Response) => {
  try {
    const user = await decodeToken(req.headers.authorization);
    const userDoc = await getDocumentFromCollection(Collection.USERS, user.uid);
    // Check if user has voted already
    if (userDoc && userDoc.votedFor) {
      // Decrement vote of previous robot
      await changeRobotVote(false, userDoc.votedFor);
    }
    // Increment vote for new robot
    await changeRobotVote(true, req.params.id);
    // Update the users currently voted selection (or create if first vote)
    await addDocumentToCollectionWithCustomId(Collection.USERS, user.uid, {
      votedFor: req.params.id,
    });
    // Get list of robots with voted property for current user
    const robots = await robotsWithVoted(
      req.headers.authorization,
      Collection.ROBOTS
    );
    return res.status(200).send(robots);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

import { Robot } from '@robot-art/api-interfaces';
import { useEffect, useState } from 'react';
import { GlobalNav, Grid, VoteCard } from '../../common/components';
import { useFirebaseAuthenticated } from '../../common/hooks';
import { Page } from '../../common/layout';
import { getRobots, voteForRobot } from '../../common/utils';
import { combineRobotsWithImages } from '../../common/utils/robot-images';

export const Robots = () => {
  const [loading, setLoading] = useState(true);
  const [robots, setRobots] = useState<Robot[]>([]);
  const [error, setError] = useState(false); // TODO: show in ui

  const { authenticated, userId } = useFirebaseAuthenticated();

  useEffect(() => {
    (async () => {
      if (authenticated) {
        try {
          const result = await getRobots();
          setRobots(await combineRobotsWithImages(result.data));
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
    })();
  }, [authenticated]);

  const triggerVote = async (id: string) => {
    const result = await voteForRobot(id);
    setRobots(await combineRobotsWithImages(result.data));
  };

  return (
    <>
      <GlobalNav />
      <Page title="Robots">
        {loading ? (
          'loading...'
        ) : (
          <Grid>
            {robots.map((robot, key) => (
              <VoteCard
                key={key}
                robot={robot}
                hasVoted={robot.voters.includes(userId)}
                onActionClick={() => triggerVote(robot.id)}
              />
            ))}
          </Grid>
        )}
      </Page>
    </>
  );
};

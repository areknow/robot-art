import { Robot } from '@robot-art/api-interfaces';
import { useEffect, useState } from 'react';
import { GlobalNav, Grid, VoteCard } from '../../common/components';
import { useFirebaseAuthenticated } from '../../common/hooks';
import { Page } from '../../common/layout';
import { getRobotImageUrl, getRobots, voteForRobot } from '../../common/utils';

export const Robots = () => {
  const [loading, setLoading] = useState(true);
  const [robots, setRobots] = useState<Robot[]>([]);
  const [error, setError] = useState(false); // TODO: show in ui

  const { authenticated } = useFirebaseAuthenticated();

  useEffect(() => {
    (async () => {
      if (authenticated) {
        try {
          const result = await getRobots();
          const dataWithImages = result.data.map(async (robot) => {
            return {
              ...robot,
              imageUrl: await getRobotImageUrl(robot.image),
            };
          });
          setRobots(await Promise.all(dataWithImages));
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
    })();
  }, [authenticated]);

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
                hasVoted={false}
                onActionClick={() => voteForRobot(robot.id)}
              />
            ))}
          </Grid>
        )}
      </Page>
    </>
  );
};

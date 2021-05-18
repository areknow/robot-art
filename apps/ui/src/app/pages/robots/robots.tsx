import { Robot } from '@robot-art/api-interfaces';
import { useEffect, useState } from 'react';
import { Error, Grid, Loader, VoteCard } from '../../common/components';
import {
  PAGE_ERROR_CONTENT,
  PAGE_ERROR_LABEL,
  PAGE_NO_ROBOTS_CONTENT,
  PAGE_NO_ROBOTS_LABEL,
} from '../../common/constants';
import { useFirebaseAuthenticated } from '../../common/hooks';
import { Page } from '../../common/layout';
import {
  combineRobotsWithImages,
  getRobots,
  sortByName,
  voteForRobot,
} from '../../common/utils';

export const Robots = () => {
  const [loading, setLoading] = useState(true);
  const [robots, setRobots] = useState<Robot[]>([]);
  const [error, setError] = useState(false);

  const { authenticated, userId } = useFirebaseAuthenticated();

  useEffect(() => {
    (async () => {
      if (authenticated) {
        try {
          const response = await getRobots();
          setRobots(await combineRobotsWithImages(response.data));
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
    })();
  }, [authenticated]);

  const handleVote = async (id: string) => {
    const result = await voteForRobot(id);
    setRobots(await combineRobotsWithImages(result.data));
  };

  if (loading) {
    return <Loader />;
  } else if (error) {
    return <Error label={PAGE_ERROR_LABEL} content={PAGE_ERROR_CONTENT} />;
  } else if (!loading && !error) {
    return (
      <Page title="Robots">
        {robots.length ? (
          <Grid>
            {sortByName(robots).map((robot, key) => (
              <VoteCard
                key={key}
                robot={robot}
                hasVoted={robot.voters.includes(userId)}
                onActionClick={() => handleVote(robot.id)}
              />
            ))}
          </Grid>
        ) : (
          <Error
            label={PAGE_NO_ROBOTS_LABEL}
            content={PAGE_NO_ROBOTS_CONTENT}
          />
        )}
      </Page>
    );
  } else {
    return null;
  }
};

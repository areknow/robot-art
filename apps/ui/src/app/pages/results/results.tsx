import { Robot } from '@robot-art/api-interfaces';
import { useEffect, useState } from 'react';
import { GlobalNav, Grid } from '../../common/components';
import { ResultCard } from '../../common/components/result-card/result-card';
import { useFirebaseAuthenticated } from '../../common/hooks';
import { Page } from '../../common/layout';
import { getRobotImageUrl, getRobots } from '../../common/utils';
import { sortByVoteCount } from '../../common/utils/sort-by-votes';

export const Results = () => {
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
          const robotsWithImages = await Promise.all(dataWithImages);
          setRobots(sortByVoteCount(robotsWithImages));
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
      <Page title="Results">
        {loading ? (
          'loading...'
        ) : (
          <Grid>
            {robots.map((robot, key) => (
              <ResultCard key={key} robot={robot} />
            ))}
          </Grid>
        )}
      </Page>
    </>
  );
};

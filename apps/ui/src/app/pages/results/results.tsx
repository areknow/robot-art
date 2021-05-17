import { Robot } from '@robot-art/api-interfaces';
import { useEffect, useState } from 'react';
import { GlobalNav, Grid, Loader, ResultCard } from '../../common/components';
import { useFirebaseAuthenticated } from '../../common/hooks';
import { Page } from '../../common/layout';
import {
  combineRobotsWithImages,
  getRobots,
  sortByVoteCount,
} from '../../common/utils';

export const Results = () => {
  const [loading, setLoading] = useState(true);
  const [robots, setRobots] = useState<Robot[]>([]);
  const [error, setError] = useState(false); // TODO: show in ui

  const { authenticated } = useFirebaseAuthenticated();

  useEffect(() => {
    (async () => {
      if (authenticated) {
        try {
          const response = await getRobots();
          setRobots(
            sortByVoteCount(await combineRobotsWithImages(response.data))
          );
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
          <Loader />
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

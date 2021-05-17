import { Robot } from '@robot-art/api-interfaces';
import { useEffect, useState } from 'react';
import { GlobalNav, Grid } from '../../common/components';
import { Loader } from '../../common/components/loader/loader';
import { ResultCard } from '../../common/components/result-card/result-card';
import { useFirebaseAuthenticated } from '../../common/hooks';
import { Page } from '../../common/layout';
import { getRobots } from '../../common/utils';
import { combineRobotsWithImages } from '../../common/utils/robot-images';
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

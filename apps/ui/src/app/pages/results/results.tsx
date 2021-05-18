import { Robot } from '@robot-art/api-interfaces';
import { useEffect, useState } from 'react';
import { Error, Grid, Loader, ResultCard } from '../../common/components';
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
  sortByVoteCount,
} from '../../common/utils';

export const Results = () => {
  const [loading, setLoading] = useState(true);
  const [robots, setRobots] = useState<Robot[]>([]);
  const [error, setError] = useState(false);

  const { authenticated } = useFirebaseAuthenticated();

  /** Effect: If authenticated, fetch the list of robots with images. */
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

  if (loading) {
    return <Loader />;
  } else if (error) {
    return <Error label={PAGE_ERROR_LABEL} content={PAGE_ERROR_CONTENT} />;
  } else if (!loading && !error) {
    return (
      <Page title="Results">
        {robots.length ? (
          <Grid>
            {sortByVoteCount(robots).map((robot, key) => (
              <ResultCard key={key} robot={robot} />
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

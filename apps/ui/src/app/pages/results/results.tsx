import { Robot } from '@robot-art/api-interfaces';
import { useEffect, useState } from 'react';
import { GlobalNav, Grid } from '../../common/components';
import { ResultCard } from '../../common/components/result-card/result-card';
import { Page } from '../../common/layout';
import { getRobotImageUrl, getRobots } from '../../common/utils';

export const Results = () => {
  const [loading, setLoading] = useState(true);
  const [robots, setRobots] = useState<Robot[]>([]);
  const [error, setError] = useState(false); // TODO: show in ui

  useEffect(() => {
    (async () => {
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
    })();
  }, []);

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

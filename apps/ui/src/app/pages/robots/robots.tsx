import { Robot } from '@robot-art/api-interfaces';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GlobalNav, VoteCard } from '../../common/components';
import { Page } from '../../common/layout';
import { getRobotImageUrl, getRobots, voteForRobot } from './service';

const StyledGrid = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export const Robots = () => {
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
      <Page title="Robots">
        {loading ? (
          'loading...'
        ) : (
          <StyledGrid>
            {robots.map((robot, key) => (
              <VoteCard
                key={key}
                name={robot.name}
                image={robot.imageUrl}
                hasVoted={false}
                onActionClick={() => voteForRobot(robot.id)}
              />
            ))}
          </StyledGrid>
        )}
      </Page>
    </>
  );
};

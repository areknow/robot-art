import { Robot } from '@robot-art/api-interfaces';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GlobalNav, ResultCard } from '../../common/components';
import { storage } from '../../common/constants';
import { Page } from '../../common/layout';

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

  useEffect(() => {
    async function fetch() {
      //TODO: try catch for error
      const result = await axios.get<Robot[]>('/api/robots');
      const dataWithImages = result.data.map(async (robot) => {
        return {
          ...robot,
          imageUrl: await storage.child(robot.image).getDownloadURL(),
        };
      });
      setRobots(await Promise.all(dataWithImages));
      setLoading(false);
    }
    fetch();
  }, []);

  return (
    <>
      <GlobalNav />
      <Page title="Robots">
        {loading ? (
          'loading...'
        ) : (
          <StyledGrid>
            {robots.length > 0 &&
              robots.map((robot, key) => (
                <ResultCard
                  key={key}
                  name={robot.name}
                  image={robot.imageUrl}
                />
              ))}
          </StyledGrid>
        )}
      </Page>
    </>
  );
};

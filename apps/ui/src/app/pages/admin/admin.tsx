import { Robot } from '@robot-art/api-interfaces';
import { useEffect, useState } from 'react';
import { EditCard, GlobalNav, Grid, Loader } from '../../common/components';
import { AddCard } from '../../common/components/add-card/add-card';
import { storage } from '../../common/constants';
import { useFirebaseAuthenticated } from '../../common/hooks';
import { Page } from '../../common/layout';
import {
  combineRobotsWithImages,
  createRobot,
  generateRandomHash,
  getRobots,
} from '../../common/utils';

export const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [robots, setRobots] = useState<Robot[]>([]);
  const [error, setError] = useState(false); // TODO: show in ui

  const { authenticated } = useFirebaseAuthenticated();

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

  const addRobot = async (file: File, name: string) => {
    setLoading(true);
    try {
      const hash = generateRandomHash();
      await storage.child(hash).put(file);
      const response = await createRobot(name, hash);
      setRobots(await combineRobotsWithImages(response.data));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const editRobot = (id: string) => {
    console.log(1);
  };

  const deleteRobot = (id: string) => {
    console.log(2);
  };

  return (
    <>
      <GlobalNav />
      <Page title="Admin">
        {loading ? (
          <Loader />
        ) : (
          <Grid>
            <AddCard onAddClick={addRobot} />
            {robots.map((robot, key) => (
              <EditCard
                key={key}
                robot={robot}
                onEditClick={() => editRobot(robot.id)}
                onDeleteClick={() => deleteRobot(robot.id)}
              />
            ))}
          </Grid>
        )}
      </Page>
    </>
  );
};

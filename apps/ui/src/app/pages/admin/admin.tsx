import { Robot } from '@robot-art/api-interfaces';
import { useEffect, useState } from 'react';
import {
  AddCard,
  EditCard,
  Error,
  Grid,
  Loader,
} from '../../common/components';
import {
  PAGE_ERROR_CONTENT,
  PAGE_ERROR_LABEL,
  storage,
} from '../../common/constants';
import { useFirebaseAuthenticated } from '../../common/hooks';
import { Page } from '../../common/layout';
import {
  addRobot,
  combineRobotsWithImages,
  deleteRobot,
  generateRandomHash,
  getRobots,
  sortByName,
} from '../../common/utils';

export const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [robots, setRobots] = useState<Robot[]>([]);
  const [error, setError] = useState(false);

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

  const handleAdd = async (file: File, name: string) => {
    setLoading(true);
    try {
      const hash = generateRandomHash();
      await storage.child(hash).put(file);
      const response = await addRobot(name, hash);
      setRobots(await combineRobotsWithImages(response.data));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id: string) => {
    console.log(1);
    //TODO: complete admin edit
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      const response = await deleteRobot(id);
      setRobots(await combineRobotsWithImages(response.data));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  } else if (error) {
    return <Error label={PAGE_ERROR_LABEL} content={PAGE_ERROR_CONTENT} />;
  } else if (!loading && !error) {
    return (
      <Page title="Admin">
        <Grid>
          <AddCard onAddClick={handleAdd} />
          {sortByName(robots).map((robot, key) => (
            <EditCard
              key={key}
              robot={robot}
              onEditClick={() => handleEdit(robot.id)}
              onDeleteClick={() => handleDelete(robot.id)}
            />
          ))}
        </Grid>
      </Page>
    );
  } else {
    return null;
  }
};

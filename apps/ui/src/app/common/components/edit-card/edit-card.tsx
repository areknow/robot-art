import { Robot } from '@robot-art/api-interfaces';
import { memo, useState } from 'react';
import styled from 'styled-components';
import { Button, Card, RobotIdentity, Upload } from '../../components';

interface EditCardProps {
  robot: Robot;
  onDeleteClick: () => void;
  onEditAddClick: (file: File, name: string) => void;
}

const StyledContent = styled.div`
  margin-top: 36px;
  display: flex;
  justify-content: space-between;
  button {
    width: 48%;
  }
`;

export const EditCard = memo(
  ({ robot, onEditAddClick, onDeleteClick }: EditCardProps) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
      <Card>
        {isEditing ? (
          <>
            <h3>Edit Robot</h3>
            <Upload
              defaultName={robot.name}
              editing
              onClearClick={() => setIsEditing(false)}
              onUpload={onEditAddClick}
            />
          </>
        ) : (
          <>
            <RobotIdentity robot={robot} />
            <StyledContent>
              <Button onClick={() => setIsEditing(true)}>Edit</Button>
              <Button variant="secondary" onClick={onDeleteClick}>
                Delete
              </Button>
            </StyledContent>
          </>
        )}
      </Card>
    );
  }
);

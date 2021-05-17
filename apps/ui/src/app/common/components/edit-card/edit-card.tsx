import { Robot } from '@robot-art/api-interfaces';
import styled from 'styled-components';
import { Button, Card, RobotIdentity } from '../../components';

interface EditCardProps {
  robot: Robot;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const StyledContent = styled.div`
  margin-top: 36px;
  display: flex;
  justify-content: space-between;
  button {
    width: 48%;
  }
`;

export const EditCard = ({
  robot,
  onEditClick,
  onDeleteClick,
}: EditCardProps) => {
  return (
    <Card>
      <RobotIdentity robot={robot} />
      <StyledContent>
        <Button onClick={onEditClick}>Edit</Button>
        <Button variant="secondary" onClick={onDeleteClick}>
          Delete
        </Button>
      </StyledContent>
    </Card>
  );
};

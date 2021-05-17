import { Robot } from '@robot-art/api-interfaces';
import styled from 'styled-components';
import { Button, Card, RobotIdentity } from '../../components';

interface EditCardProps {
  robot: Robot;
}

const StyledContent = styled.div`
  margin-top: 36px;
  display: flex;
  justify-content: space-between;
  button {
    width: 48%;
  }
`;

export const EditCard = ({ robot }: EditCardProps) => {
  return (
    <Card>
      <RobotIdentity robot={robot} />
      <StyledContent>
        <Button onClick={() => null}>Edit</Button>
        <Button variant="secondary" onClick={() => null}>
          Delete
        </Button>
      </StyledContent>
    </Card>
  );
};

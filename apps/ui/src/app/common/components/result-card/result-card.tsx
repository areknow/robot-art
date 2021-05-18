import { Robot } from '@robot-art/api-interfaces';
import styled from 'styled-components';
import { Card, ProgressBar, RobotIdentity } from '../../components';
import { MAX_VOTES } from './constants';

interface ResultCardProps {
  robot: Robot;
}

const StyledContent = styled.div`
  h2,
  h3 {
    display: inline;
  }
  h3 {
    color: var(--neutral-4);
  }
`;

export const ResultCard = ({ robot }: ResultCardProps) => {
  return (
    <Card>
      <RobotIdentity robot={robot} />
      <StyledContent>
        <h2>{robot.votes}</h2>
        <h3>/{MAX_VOTES}</h3>
      </StyledContent>
      <ProgressBar percentage={(robot.votes / MAX_VOTES) * 100} />
    </Card>
  );
};

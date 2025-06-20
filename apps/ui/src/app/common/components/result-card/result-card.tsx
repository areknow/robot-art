import { Robot } from '@robot-art/api-interfaces';
import { memo } from 'react';
import styled from 'styled-components';
import { Card, ProgressBar, RobotIdentity } from '../../components';

interface ResultCardProps {
  /** The robot to display results for. */
  robot: Robot;
  /** The maximum number of votes across all robots. */
  maxVotes: number;
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

export const ResultCard = memo(({ robot, maxVotes }: ResultCardProps) => {
  return (
    <Card>
      <RobotIdentity robot={robot} />
      <StyledContent>
        <h2>{robot.votes}</h2>
        <h3>/{maxVotes}</h3>
      </StyledContent>
      <ProgressBar value={robot.votes} max={maxVotes} />
    </Card>
  );
});

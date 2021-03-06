import { Robot } from '@robot-art/api-interfaces';
import { memo } from 'react';
import styled from 'styled-components';
import { Card, ProgressBar, RobotIdentity } from '../../components';
import { MAX_VOTES } from './constants';

interface ResultCardProps {
  /** The robot to display results for. */
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

export const ResultCard = memo(({ robot }: ResultCardProps) => {
  return (
    <Card>
      <RobotIdentity robot={robot} />
      <StyledContent>
        <h2>{robot.votes}</h2>
        <h3>/{MAX_VOTES}</h3>
      </StyledContent>
      <ProgressBar value={robot.votes} max={MAX_VOTES} />
    </Card>
  );
});

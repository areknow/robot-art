import { Robot } from '@robot-art/api-interfaces';
import { memo } from 'react';
import styled from 'styled-components';
import { Button, Card, RobotIdentity } from '../../components';

interface VoteCardProps {
  robot: Robot;
  hasVoted: boolean;
  onActionClick: () => void;
}

const StyledContent = styled.div`
  button {
    margin-top: 36px;
    width: 150px;
  }
`;

export const VoteCard = memo(
  ({ robot, hasVoted, onActionClick }: VoteCardProps) => {
    return (
      <Card>
        <RobotIdentity robot={robot} />
        <StyledContent>
          <Button disabled={hasVoted} onClick={onActionClick}>
            {hasVoted ? 'Vote cast' : 'Vote'}
          </Button>
        </StyledContent>
      </Card>
    );
  }
);

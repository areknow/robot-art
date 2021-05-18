import { Robot } from '@robot-art/api-interfaces';
import { memo } from 'react';
import styled from 'styled-components';
import { ReactComponent as Spinner } from '../../../../assets/spinner.svg';
import { Button, Card, RobotIdentity } from '../../components';

interface VoteCardProps {
  /** The robot to vote on. */
  robot: Robot;
  /** Whether or not the user has already voted for this robot. */
  hasVoted: boolean;
  /** Whether or not the voting request is pending completion. */
  voting: boolean;
  /** The event fired when the voting action is clicked. */
  onActionClick: () => void;
}

const StyledContent = styled.div`
  button {
    margin-top: 36px;
    width: 150px;
  }
`;

const StyledLoader = styled.div`
  width: 20px;
  height: 20px;
`;

export const VoteCard = memo(
  ({ robot, hasVoted, voting, onActionClick }: VoteCardProps) => {
    return (
      <Card>
        <RobotIdentity robot={robot} />
        <StyledContent>
          <Button
            disabled={hasVoted}
            onClick={onActionClick}
            icon={
              voting && (
                <StyledLoader>
                  <Spinner />
                </StyledLoader>
              )
            }
          >
            {voting ? 'Voting' : hasVoted ? 'Vote cast' : 'Vote'}
          </Button>
        </StyledContent>
      </Card>
    );
  }
);

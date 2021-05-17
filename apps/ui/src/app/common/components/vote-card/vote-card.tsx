import { Robot } from '@robot-art/api-interfaces';
import styled from 'styled-components';
import { Button } from '../../components';

interface VoteCardProps {
  robot: Robot;

  hasVoted: boolean;
  onActionClick: () => void;
}

const StyledVoteCard = styled.div`
  background: #ffffff;
  border: 1px solid #d8dadb;
  box-sizing: border-box;
  box-shadow: 0px 9px 15px -9px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 40px 24px 24px 24px;
  text-align: center;
  img {
    margin-top: 20px;
    width: 100%;
    margin: auto;
  }
  button {
    margin-top: 36px;
    width: 150px;
  }
`;

export const VoteCard = ({ robot, hasVoted, onActionClick }: VoteCardProps) => {
  return (
    <StyledVoteCard>
      <h3>{robot.name}</h3>
      <img alt={robot.name} src={robot.imageUrl} />
      <Button disabled={hasVoted} onClick={onActionClick}>
        {hasVoted ? 'Vote cast' : 'Vote'}
      </Button>
    </StyledVoteCard>
  );
};

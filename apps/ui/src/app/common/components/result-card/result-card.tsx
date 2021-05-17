import { Robot } from '@robot-art/api-interfaces';
import styled from 'styled-components';
import { ProgressBar } from '../progress-bar/progress-bar';
import { MAX_VOTES } from './constants';

interface ResultCardProps {
  robot: Robot;
}

const StyledResultCard = styled.div`
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
`;

const StyledVoteCount = styled.div`
  h2,
  h3 {
    display: inline;
  }
  h3 {
    color: #737475;
  }
`;

export const ResultCard = ({ robot }: ResultCardProps) => {
  return (
    <StyledResultCard>
      <h3>{robot.name}</h3>
      <img alt={robot.name} src={robot.imageUrl} />
      <StyledVoteCount>
        <h2>{robot.votes}</h2>
        <h3>/{MAX_VOTES}</h3>
      </StyledVoteCount>
      <ProgressBar percentage={(robot.votes / MAX_VOTES) * 100} />
    </StyledResultCard>
  );
};

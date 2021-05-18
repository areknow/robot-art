import styled from 'styled-components';
import { MAX_PROGRESS_VALUE } from './constants';

interface ProgressBarProps {
  percentage: number;
}

const StyledProgressBar = styled.progress`
  appearance: none;
  border: 2px solid var(--neutral-3);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 2px;
  height: 34px;
  width: 100%;
  margin-top: 10px;

  ::-webkit-progress-bar {
    background-color: transparent;
  }
  ::-webkit-progress-value {
    height: 26px;
    border-radius: 5px;
    background-color: var(--neutral-5);
  }
`;

export const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <StyledProgressBar id="file" value={percentage} max={MAX_PROGRESS_VALUE} />
  );
};

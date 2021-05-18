import { memo } from 'react';
import styled from 'styled-components';

interface ProgressBarProps {
  /** The percentage of the progress bar completion. */
  percentage: number;
  /** The maximum value that the progress bar can reach. */
  max: number;
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
  // Custom HTML progress element styling
  ::-webkit-progress-bar {
    background-color: transparent;
  }
  ::-webkit-progress-value {
    height: 26px;
    border-radius: 5px;
    background-color: var(--neutral-5);
  }
`;

export const ProgressBar = memo(({ percentage, max }: ProgressBarProps) => {
  return <StyledProgressBar id="file" value={percentage} max={max} />;
});

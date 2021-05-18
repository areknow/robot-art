import { memo, ReactNode } from 'react';
import styled from 'styled-components';
import { ReactComponent as WarningIcon } from '../../../../assets/warning.svg';

interface ErrorProps {
  /** The top label of the error message. */
  label: string;
  /** The content in the bottom of the error message. */
  content: ReactNode;
}

const StyledError = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 200px);
`;

const StyledIcon = styled.div`
  margin-right: 20px;
  svg {
    width: 50px;
    height: 50px;
    fill: var(--neutral-5);
  }
`;

const StyledContent = styled.div`
  h3 {
    margin-bottom: 5px;
  }
`;

export const Error = memo(({ label, content }: ErrorProps) => {
  return (
    <StyledError data-testid="error">
      <StyledIcon>
        <WarningIcon />
      </StyledIcon>
      <StyledContent>
        <h3>{label}</h3>
        <span>{content}</span>
      </StyledContent>
    </StyledError>
  );
});

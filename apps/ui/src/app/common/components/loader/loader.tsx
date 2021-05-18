import { memo } from 'react';
import styled from 'styled-components';
import { ReactComponent as Spinner } from '../../../../assets/spinner.svg';

const StyledLoader = styled.div`
  width: 100%;
  margin: 0 0 2em;
  height: calc(100vh - 200px);
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: inline-block;
  vertical-align: top;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(--neutral-5);
  svg {
    width: 50px;
    height: 50px;
  }
`;

export const Loader = memo(() => {
  return (
    <StyledLoader data-testid="loader">
      <Spinner />
    </StyledLoader>
  );
});

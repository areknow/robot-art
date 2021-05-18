import { memo, ReactNode } from 'react';
import styled from 'styled-components';

interface GridProps {
  children: ReactNode;
}

const StyledGrid = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 25px;
  grid-row-gap: 34px;
  @media (max-width: 900px) {
    grid-row-gap: 8px;
  }
`;

export const Grid = memo(({ children }: GridProps) => {
  return <StyledGrid>{children}</StyledGrid>;
});

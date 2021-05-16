import { ReactNode } from 'react';
import styled from 'styled-components';

interface PageProps {
  children: ReactNode;
}

const StyledPage = styled.div`
  max-width: 1200px;
  margin: 50px auto 20px auto;
`;

export const Page = ({ children }: PageProps) => {
  return <StyledPage>{children}</StyledPage>;
};

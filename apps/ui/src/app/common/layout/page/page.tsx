import { ReactNode } from 'react';
import styled from 'styled-components';

interface PageProps {
  title: string;
  children: ReactNode;
}

const StyledPage = styled.div`
  max-width: 1200px;
  margin: 50px auto 20px auto;
`;

export const Page = ({ title, children }: PageProps) => {
  document.title = `Robot Art | ${title}`;

  return <StyledPage>{children}</StyledPage>;
};

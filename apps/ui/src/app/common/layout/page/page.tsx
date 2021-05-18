import { memo, ReactNode } from 'react';
import styled from 'styled-components';

interface PageProps {
  title: string;
  children: ReactNode;
}

const StyledPage = styled.div`
  max-width: 1248px;
  margin: 0 auto;
  padding: 50px 24px;
  @media (max-width: 900px) {
    padding: 50px 8px;
    h1 {
      margin-left: 24px;
    }
  }
`;

export const Page = memo(({ title, children }: PageProps) => {
  document.title = `Robot Art | ${title}`;

  return (
    <StyledPage>
      <h1>{title}</h1>
      {children}
    </StyledPage>
  );
});

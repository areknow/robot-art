import { memo, ReactNode } from 'react';
import styled from 'styled-components';

interface PageProps {
  title: string;
  children: ReactNode;
}

const StyledPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
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

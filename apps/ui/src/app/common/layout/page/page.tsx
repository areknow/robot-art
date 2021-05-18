import { memo, ReactNode } from 'react';
import styled from 'styled-components';

interface PageProps {
  /** The title of the page to be displayed in the heading and the document. */
  title: string;
  /** The content displayed in the page itself.  */
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
  // Set the document title.
  document.title = `Robot Art | ${title}`;

  return (
    <StyledPage>
      <h1>{title}</h1>
      {children}
    </StyledPage>
  );
});

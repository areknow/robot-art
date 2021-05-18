import { render, waitFor } from '@testing-library/react';
import { Page } from './page';

describe('Page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Page title="foo">bar</Page>);
    expect(baseElement).toBeTruthy();
  });

  it('should show children', () => {
    const children = 'foo';
    const { queryByText } = render(<Page title="bar">{children}</Page>);
    expect(queryByText(children)).toBeTruthy();
  });

  it('should show document title', async () => {
    const title = 'foo';
    render(<Page title={title}>bar</Page>);
    await waitFor(() => {
      expect(document.title).toEqual(`Robot Art | ${title}`);
    });
  });
});

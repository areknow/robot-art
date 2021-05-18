import { render } from '@testing-library/react';
import { Grid } from './grid';

describe('Grid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Grid>foo</Grid>);
    expect(baseElement).toBeTruthy();
  });

  it('should show children', () => {
    const children = 'foo';
    const { queryByText } = render(<Grid>{children}</Grid>);
    expect(queryByText(children)).toBeTruthy();
  });
});

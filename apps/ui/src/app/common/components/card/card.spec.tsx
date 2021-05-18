import { render } from '@testing-library/react';
import { Card } from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card>foo</Card>);
    expect(baseElement).toBeTruthy();
  });

  it('should show children', () => {
    const children = 'foo';
    const { queryByText } = render(<Card>{children}</Card>);
    expect(queryByText(children)).toBeTruthy();
  });
});

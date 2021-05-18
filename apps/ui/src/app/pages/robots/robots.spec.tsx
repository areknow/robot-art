import { render } from '@testing-library/react';
import { Robots } from './robots';

describe('Robots', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Robots />);
    expect(baseElement).toBeTruthy();
  });
});

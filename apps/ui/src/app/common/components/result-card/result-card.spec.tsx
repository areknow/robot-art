import { render } from '@testing-library/react';
import robot from '../../../../__mocks__/robot.json';
import { ResultCard } from './result-card';

describe('ResultCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResultCard robot={robot} />);
    expect(baseElement).toBeTruthy();
  });

  it('should show votes', () => {
    const { queryByText } = render(<ResultCard robot={robot} />);
    expect(queryByText(robot.votes)).toBeTruthy();
  });
});

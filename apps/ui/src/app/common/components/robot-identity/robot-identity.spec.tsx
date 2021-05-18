import { render } from '@testing-library/react';
import robot from '../../../../__mocks__/robot.json';
import { RobotIdentity } from './robot-identity';

describe('RobotIdentity', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RobotIdentity robot={robot} />);
    expect(baseElement).toBeTruthy();
  });

  it('should show robot name', () => {
    const { queryByText } = render(<RobotIdentity robot={robot} />);
    expect(queryByText(robot.name)).toBeTruthy();
  });
});

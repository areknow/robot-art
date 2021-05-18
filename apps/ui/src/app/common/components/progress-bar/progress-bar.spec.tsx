import { render } from '@testing-library/react';
import { ProgressBar } from './progress-bar';

describe('ProgressBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProgressBar value={0} max={0} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<ProgressBar value={0} max={0} />);
    expect(baseElement).toBeTruthy();
  });

  it('should use the value', () => {
    const value = 100;
    const { getByTestId } = render(<ProgressBar value={value} max={0} />);
    expect(getByTestId('progress-bar').getAttribute('value')).toEqual(
      String(value)
    );
  });

  it('should use the max', () => {
    const max = 100;
    const { getByTestId } = render(<ProgressBar value={0} max={max} />);
    expect(getByTestId('progress-bar').getAttribute('max')).toEqual(
      String(max)
    );
  });
});

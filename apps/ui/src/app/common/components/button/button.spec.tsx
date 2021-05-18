import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button onClick={jest.fn()}>foo</Button>);
    expect(baseElement).toBeTruthy();
  });

  it('should show children', () => {
    const children = 'foo';
    const { queryByText } = render(
      <Button onClick={jest.fn()}>{children}</Button>
    );
    expect(queryByText(children)).toBeTruthy();
  });

  it('should not be disabled', () => {
    const { getByTestId } = render(<Button onClick={jest.fn()}>foo</Button>);
    const disabled = getByTestId('button').getAttribute('disabled');
    expect(disabled).toEqual(null);
  });

  it('should be disabled', () => {
    const { getByTestId } = render(
      <Button disabled onClick={jest.fn()}>
        foo
      </Button>
    );
    const disabled = getByTestId('button').getAttribute('disabled');
    expect(disabled).not.toEqual(null);
  });

  it('should render icon', () => {
    const icon = 'foo';
    const { getByText } = render(
      <Button icon={<div>{icon}</div>} onClick={jest.fn()}>
        bar
      </Button>
    );
    expect(getByText(icon)).toBeTruthy();
  });

  it('should fire click event', () => {
    let clicked = false;
    const { getByTestId } = render(
      <Button onClick={() => (clicked = true)}>bar</Button>
    );
    fireEvent.click(getByTestId('button'));
    expect(clicked).toBeTruthy();
  });
});

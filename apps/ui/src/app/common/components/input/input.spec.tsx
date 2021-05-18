import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Input } from './input';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Input value="" label="" onChange={jest.fn()} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should show label', () => {
    const label = 'foo';
    const { queryByText } = render(
      <Input value="" label={label} onChange={jest.fn()} />
    );
    expect(queryByText(label)).toBeTruthy();
  });

  it('should show value', () => {
    const value = 'foo';
    const { getByTestId } = render(
      <Input value={value} label="" onChange={jest.fn()} />
    );
    expect(getByTestId('input').getAttribute('value')).toEqual(value);
  });

  it('should show value', () => {
    const type = 'foo';
    const { getByTestId } = render(
      <Input value="" label="" type={type} onChange={jest.fn()} />
    );
    expect(getByTestId('input').getAttribute('type')).toEqual(type);
  });

  it('should update value', () => {
    let value = '';
    const newVal = 'foo';
    const { getByTestId } = render(
      <Input value="" label="" onChange={(val) => (value = val)} />
    );
    fireEvent.change(getByTestId('input'), { target: { value: newVal } });
    expect(value).toEqual(newVal);
  });
});

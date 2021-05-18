import { render } from '@testing-library/react';
import {
  ADD_ROBOT_LABEL,
  CANCEL_LABEL,
  CLEAR_LABEL,
  SAVE_ROBOT_LABEL,
} from './constants';
import { Upload } from './upload';

describe('Upload', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Upload onUpload={jest.fn()} onClearClick={jest.fn()} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should show default name', () => {
    const defaultName = 'foo';
    const { getByTestId } = render(
      <Upload
        defaultName={defaultName}
        onUpload={jest.fn()}
        onClearClick={jest.fn()}
      />
    );
    expect(getByTestId('input').getAttribute('value')).toEqual(defaultName);
  });

  it('should not show editing state', () => {
    const { queryByText } = render(
      <Upload onUpload={jest.fn()} onClearClick={jest.fn()} />
    );
    expect(queryByText(CLEAR_LABEL)).toBeTruthy();
    expect(queryByText(ADD_ROBOT_LABEL)).toBeTruthy();
  });

  it('should show editing state', () => {
    const { queryByText } = render(
      <Upload editing onUpload={jest.fn()} onClearClick={jest.fn()} />
    );
    expect(queryByText(CANCEL_LABEL)).toBeTruthy();
    expect(queryByText(SAVE_ROBOT_LABEL)).toBeTruthy();
  });
});

import { fireEvent, render } from '@testing-library/react';
import robot from '../../../../__mocks__/robot.json';
import { EditCard } from './edit-card';

describe('EditCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <EditCard
        robot={robot}
        onDeleteClick={jest.fn()}
        onEditAddClick={jest.fn()}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should show robot name', () => {
    const { queryByText } = render(
      <EditCard
        robot={robot}
        onDeleteClick={jest.fn()}
        onEditAddClick={jest.fn()}
      />
    );
    expect(queryByText(robot.name)).toBeTruthy();
  });

  it('should fire onDeleteClick event', () => {
    let clicked = false;
    const { getByText } = render(
      <EditCard
        robot={robot}
        onDeleteClick={() => (clicked = true)}
        onEditAddClick={jest.fn()}
      />
    );
    fireEvent.click(getByText('Delete'));
    expect(clicked).toBeTruthy();
  });

  it('should fire onEditAddClick event', () => {
    let clicked = false;
    const { getByText } = render(
      <EditCard
        robot={robot}
        onDeleteClick={() => (clicked = true)}
        onEditAddClick={jest.fn()}
      />
    );
    fireEvent.click(getByText('Delete'));
    expect(clicked).toBeTruthy();
  });
});

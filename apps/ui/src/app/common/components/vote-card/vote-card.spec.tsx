import { fireEvent, render } from '@testing-library/react';
import robot from '../../../../__mocks__/robot.json';
import { VOTE_CAST_LABEL, VOTE_LABEL, VOTING_LABEL } from './constants';
import { VoteCard } from './vote-card';

describe('VoteCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <VoteCard
        robot={robot}
        hasVoted={false}
        voting={false}
        onActionClick={jest.fn()}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should show robot name', () => {
    const { queryByText } = render(
      <VoteCard
        robot={robot}
        hasVoted={false}
        voting={false}
        onActionClick={jest.fn()}
      />
    );
    expect(queryByText(robot.name)).toBeTruthy();
  });

  it('should fire onActionClick event', () => {
    let clicked = false;
    const { getByText } = render(
      <VoteCard
        robot={robot}
        hasVoted={false}
        voting={false}
        onActionClick={() => (clicked = true)}
      />
    );
    fireEvent.click(getByText('Vote'));
    expect(clicked).toBeTruthy();
  });

  it('should show vote label', () => {
    const { queryByText } = render(
      <VoteCard
        robot={robot}
        hasVoted={false}
        voting={false}
        onActionClick={jest.fn()}
      />
    );
    expect(queryByText(VOTE_LABEL)).toBeTruthy();
  });

  it('should show voting label', () => {
    const { queryByText } = render(
      <VoteCard
        robot={robot}
        hasVoted={false}
        voting={true}
        onActionClick={jest.fn()}
      />
    );
    expect(queryByText(VOTING_LABEL)).toBeTruthy();
  });

  it('should show vote cast label', () => {
    const { queryByText } = render(
      <VoteCard
        robot={robot}
        hasVoted={true}
        voting={false}
        onActionClick={jest.fn()}
      />
    );
    expect(queryByText(VOTE_CAST_LABEL)).toBeTruthy();
  });

  it('should show spinner when voting', () => {
    const { queryByText } = render(
      <VoteCard
        robot={robot}
        hasVoted={false}
        voting={true}
        onActionClick={jest.fn()}
      />
    );
    expect(queryByText('spinner.svg')).toBeTruthy();
  });
});

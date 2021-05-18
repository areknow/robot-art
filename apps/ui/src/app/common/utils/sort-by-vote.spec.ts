import { sortByVoteCount } from './sort-by-votes';

describe('Utils sortByVoteCount', () => {
  it('should sort by name', () => {
    const arr = [
      {
        id: '1',
        name: 'b',
        image: 'bar',
        imageUrl: 'xyz',
        votes: 2,
        voters: ['a', 'b'],
      },
      {
        id: '2',
        name: 'a',
        image: 'bar',
        imageUrl: 'xyz',
        votes: 3,
        voters: ['a', 'b'],
      },
    ];
    const sorted = sortByVoteCount(arr);
    expect(sorted[0].name).toEqual('a');
  });
});

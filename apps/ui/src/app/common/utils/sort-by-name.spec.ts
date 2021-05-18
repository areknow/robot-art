import { sortByName } from './sort-by-name';

describe('Utils sortByName', () => {
  it('should sort by name', () => {
    const arr = [
      {
        id: '1',
        name: 'b',
        image: 'bar',
        imageUrl: 'xyz',
        votes: 1,
        voters: ['a', 'b'],
      },
      {
        id: '2',
        name: 'a',
        image: 'bar',
        imageUrl: 'xyz',
        votes: 1,
        voters: ['a', 'b'],
      },
    ];
    const sorted = sortByName(arr);
    expect(sorted[0].name).toEqual('a');
  });
});

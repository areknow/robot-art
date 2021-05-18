import { generateRandomHash } from './generate-hash';

describe('Utils generateRandomHash', () => {
  it('should generate random hash', () => {
    const hash = generateRandomHash();
    expect(hash).toBeTruthy();
  });
});

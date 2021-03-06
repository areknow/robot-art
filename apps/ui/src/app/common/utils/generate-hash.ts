const HASH_LENGTH = 64;
const HASH_CHARACTERS = '0123456789abcdefghijklmnopqrstuvwxyz';

/** Generate a random hash to use in uploading images. */
export const generateRandomHash = () => {
  let hash = '';
  for (let i = 0; i <= HASH_LENGTH; i++) {
    hash += HASH_CHARACTERS[Math.floor(Math.random() * HASH_CHARACTERS.length)];
  }
  return hash;
};

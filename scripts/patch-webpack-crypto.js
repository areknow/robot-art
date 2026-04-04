'use strict';

/**
 * Webpack 4 calls crypto.createHash("md4"), which OpenSSL 3+ rejects without
 * --openssl-legacy-provider. That flag is unavailable in some environments
 * (disallowed in NODE_OPTIONS, or unsupported on the Node binary). Map md4 to
 * sha256 so builds work everywhere; chunk filenames change but remain stable per build.
 */
const crypto = require('crypto');
const orig = crypto.createHash.bind(crypto);
crypto.createHash = (algorithm, ...args) =>
  orig(algorithm === 'md4' ? 'sha256' : algorithm, ...args);

// jest.config.js
const {defaults} = require('jest-config');
module.exports = {
  // ...
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'mjs',
    // 'jsx',
    // 'ts',
    // 'tsx',
  ],
  // ...
};

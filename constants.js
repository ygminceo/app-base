const { join, resolve } = require('path');

const EXTENSIONS = [
  '.tsx',
  '.ts',
  '.jsx',
  '.js',
  '.json',
];

module.exports = {
  ROOT_PATH: resolve(__dirname),
  PACKAGES_PATH: resolve(join(__dirname, './packages')),
  EXTENSIONS,
  NATIVE_EXTENSIONS: [
    '.native.tsx',
    '.ios.tsx',
    '.android.tsx',
    '.native.ts',
    ...EXTENSIONS,
  ],
};

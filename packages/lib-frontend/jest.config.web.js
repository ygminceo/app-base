const { defaultsDeep, trim } = require('lodash');
const { resolve } = require('path');
const base = require('./jest.config');
const { EXTENSIONS, ROOT_PATH } = require('../../constants');

const overrides = require(resolve(
  ROOT_PATH,
  'packages/lib-frontend/src/web/webpack.config-overrides',
));

module.exports = defaultsDeep(
  {
    preset: 'react-native-web',

    testEnvironment: 'jsdom',

    transform: { '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest' },

    transformIgnorePatterns: [`<rootDir>/node_modules/(?!${overrides.transpileModules.join('|')})`],

    moduleFileExtensions: EXTENSIONS.map((ext) => trim(ext, '.')),

    moduleNameMapper: {
      '^react-native$': 'react-native-web',
    },
  },
  base,
);

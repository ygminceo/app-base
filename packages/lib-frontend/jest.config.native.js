const { resolve } = require('path');
const { defaultsDeep, trim } = require('lodash');
const base = require('./jest.config');
const { NATIVE_EXTENSIONS, ROOT_PATH } = require('../../constants');

module.exports = defaultsDeep(
  {
    preset: 'react-native',

    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],

    moduleFileExtensions: NATIVE_EXTENSIONS.map((ext) => trim(ext, '.')),

    transform: {
      '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    },
    
    globals: {
      'ts-jest': {
        babelConfig: require(resolve(ROOT_PATH, 'packages/app-mobile/babel.config.js')),
      },
    },
  },
  base,
);

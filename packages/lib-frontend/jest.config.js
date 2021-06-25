const { defaultsDeep } = require('lodash');
const base = require('../../jest.config');

module.exports = defaultsDeep(
  {
    collectCoverageFrom: [
      ...base.collectCoverageFrom,
      '<rootDir>/packages/lib-frontend/src/**/*.{js,jsx,ts,tsx}',
    ],
    testMatch: [
      '<rootDir>/packages/lib-frontend/__tests__/**/*.{js,jsx,ts,tsx}',
      '<rootDir>/packages/lib-frontend/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ],
  },
  base,
);

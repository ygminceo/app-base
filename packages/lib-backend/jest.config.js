const { defaultsDeep } = require('lodash');
const base = require('../../jest.config');

module.exports = defaultsDeep(
  {
    collectCoverageFrom: [
      ...base.collectCoverageFrom,
      '<rootDir>/packages/lib-backend/src/**/*.{js,jsx,ts,tsx}',
    ],
    testMatch: [
      '<rootDir>/packages/lib-backend/__tests__/**/*.{js,jsx,ts,tsx}',
      '<rootDir>/packages/lib-backend/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ],
  },
  base,
);

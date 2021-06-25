const { ROOT_PATH } = require('./constants');
const paths = require('./tsconfig.paths.json').compilerOptions.paths;

module.exports = {
  rootDir: ROOT_PATH,

  setupFiles: ['<rootDir>/dotenv.config.js'],

  collectCoverage: true,

  collectCoverageFrom: ['!**/node_modules/**'],

  transform: { '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest' },

  moduleNameMapper: Object.keys(paths).reduce(
    (result, k) =>
      k.startsWith('@')
        ? {
            ...result,
            [k.replace('/*', '/(.+)')]: paths[k].map((v) => `<rootDir>/${v.replace('/*', '/$1')}`),
          }
        : result,
    {},
  ),
};

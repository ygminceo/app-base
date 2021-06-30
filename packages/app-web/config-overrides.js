const { resolve } = require('path');
const {
  addWebpackPlugin,
  addWebpackResolve,
  babelInclude,
  override,
  overrideDevServer,
  removeModuleScopePlugin,
} = require('customize-cra');
const { ROOT_PATH } = require('../../constants');

const overrides = require(resolve(
  ROOT_PATH,
  'packages/lib-frontend/src/web/webpack.config-overrides',
));

module.exports = {
  webpack: override(
    removeModuleScopePlugin(),

    ...overrides.config.plugins.map((plugin) => addWebpackPlugin(plugin)),

    babelInclude([
      resolve('src'),
      ...overrides.babelInclude,
      ...overrides.transpileModules.map((name) => resolve(ROOT_PATH, 'node_modules', name)),
    ]),

    addWebpackResolve({
      modules: overrides.config.resolve.modules,
      plugins: overrides.config.resolve.plugins,
      alias: overrides.config.resolve.alias,
      extensions: overrides.config.resolve.extensions,
    }),
  ),

  devServer: overrideDevServer((config) => ({
    ...config,
    writeToDisk: true,
  })),

  jest: (config) => {
    return {
      ...config,
      roots: ['<rootDir>/packages/lib-frontend'],
      watchPlugins: [],
    };
  },
};

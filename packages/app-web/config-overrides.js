const { resolve } = require('path');
const {
  addWebpackPlugin,
  addWebpackResolve,
  babelInclude,
  override,
  overrideDevServer,
  removeModuleScopePlugin,
} = require('customize-cra');
const { ROOT_PATH, PACKAGES_PATH } = require('../../constants');

const overrides = require(resolve(PACKAGES_PATH, 'lib-frontend/src/web/webpack.config-overrides'));

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
};

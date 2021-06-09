const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { startsWith, reduce } = require('lodash');
const { DefinePlugin } = require('webpack');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const { EXTENSIONS, ROOT_PATH, PACKAGES_PATH } = require('../../../../constants');

const TRANSIPLE_MODULES = [
  'react-native-animatable',
  'react-native-animated-spinkit',
  'react-native-iphone-x-helper',
  'react-native-modal',
  'react-native-paper',
  'react-native-vector-icons',
];

module.exports = {
  babelInclude: [
    resolve(PACKAGES_PATH, 'lib-common/src'),
    resolve(PACKAGES_PATH, 'lib-frontend/src'),
  ],

  transpileModules: TRANSIPLE_MODULES,

  config: {
    plugins: [
      new DefinePlugin({
        'process.env': reduce(
          process.env,
          (result, v, k) =>
            startsWith(k, 'REACT_APP') ? { ...result, [k]: JSON.stringify(v) } : result,
          {},
        ),
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: resolve(PACKAGES_PATH, 'lib-common/assets'),
            to: resolve(process.cwd(), 'public'),
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        'react-native$': 'react-native-web',
      },
      extensions: [...EXTENSIONS, '...'],
      modules: [resolve(ROOT_PATH, 'node_modules')],
      plugins: [new TsconfigPathsPlugin({ silent: true })],
    },
  },
};

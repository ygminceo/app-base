const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { reduce } = require('lodash');
const { DefinePlugin } = require('webpack');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const { EXTENSIONS, ROOT_PATH } = require('../../../../constants');

const TRANSIPLE_MODULES = [
  'react-native-animatable',
  'react-native-animated-spinkit',
  'react-native-iphone-x-helper',
  'react-native-modal',
  'react-native-paper',
  'react-native-switch',
  'react-native-vector-icons',
];

module.exports = {
  babelInclude: [
    resolve(ROOT_PATH, 'packages/lib-common/src'),
    resolve(ROOT_PATH, 'packages/lib-frontend/src'),
  ],

  transpileModules: TRANSIPLE_MODULES,

  config: {
    plugins: [
      new DefinePlugin({
        'process.env': reduce(
          process.env,
          (result, v, k) =>
            k.startsWith('REACT_APP') || k.startsWith('NODE')
              ? { ...result, [k]: JSON.stringify(v) }
              : result,
          {},
        ),
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: resolve(ROOT_PATH, 'packages/lib-assets/src/public'),
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

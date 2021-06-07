const { resolve } = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const ESLintPlugin = require('eslint-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { EXTENSIONS, ROOT_PATH } = require('../../../../constants');

const isDev = slsw.lib.webpack.isLocal;

const tsConfig = resolve(process.cwd(), '../../../tsconfig.json');

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: slsw.lib.entries,
  target: 'node',
  externals: [
    nodeExternals({
      modulesDir: [resolve(process.cwd(), 'node_modules'), resolve(ROOT_PATH, 'node_modules')],
    }),
  ],
  externalsPresets: { node: true },
  devtool: 'source-map',
  stats: 'minimal',
  output: {
    path: resolve(process.cwd(), '.webpack'),
    libraryTarget: 'commonjs2',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              projectReferences: true,
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: EXTENSIONS,
    plugins: [new TsconfigPathsPlugin({ configFile: tsConfig })],
  },
  plugins: [
    new ESLintPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: tsConfig,
      },
    }),
  ],
  optimization: isDev
    ? {
        splitChunks: false,
        removeEmptyChunks: false,
        removeAvailableModules: false,
      }
    : {
        minimize: false,
      },
  node: {
    __dirname: false,
  },
};

const { resolve } = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const ESLintPlugin = require('eslint-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { EXTENSIONS, ROOT_PATH } = require('../../../../constants');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = slsw.lib.webpack.isLocal;

const tsConfig = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: slsw.lib.entries,
  target: 'node',
  externals: [
    nodeExternals({
      // modulesDir: ['node_modules', resolve(ROOT_PATH, 'node_modules')],
      additionalModuleDirs: ['node_modules', resolve(ROOT_PATH, 'node_modules')],
    }),
    // { consolidate: 'commonjs consolidate' },
  ],
  // externalsPresets: { node: true },
  // devtool: 'source-map',
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
            loader: 'babel-loader',
            options: {
              configFile: resolve(process.cwd(), 'babel.config.js'),
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
    // TODO: need to copy other resources?
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve(ROOT_PATH, 'packages/lib-assets/src/mail'),
          to: 'mail',
        },
      ],
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: tsConfig,
      },
    }),
    ...(isDev ? [new BundleAnalyzerPlugin({ openAnalyzer })] : []),
  ],
  optimization: isDev
    ? {
        splitChunks: false,
        removeEmptyChunks: false,
        removeAvailableModules: false,
      }
    : {
        minimize: false,
        concatenateModules: false,
      },
  node: {
    __dirname: true,
  },
};

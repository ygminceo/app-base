const { resolve } = require('path');
const { NATIVE_EXTENSIONS, ROOT_PATH } = require('./constants');
const paths = require('./tsconfig.paths.json').compilerOptions.paths;

module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: Object.keys(paths).reduce(
          (result, k) => k.startsWith('@') ? ({
            ...result,
            [k.replace('/*', '')]: paths[k].map((v) => resolve(ROOT_PATH, v.replace('/*', ''))),
          }) : result,
          {
            '^react-native$': 'react-native-web',
          },
        ),
        extensions: NATIVE_EXTENSIONS,
      },
    ],
  ],
};

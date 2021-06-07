const { ROOT_PATH } = require('../../constants');

module.exports = {
  projectRoot: ROOT_PATH,
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};

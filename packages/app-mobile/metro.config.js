const { ROOT_PATH } = require('../../constants');

module.exports = {
  watchFolders: [ROOT_PATH],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

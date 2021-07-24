const { getDefaultConfig } = require('metro-config');
const { ROOT_PATH } = require('../../constants');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    projectRoot: ROOT_PATH,
    watchFolders: [ROOT_PATH],
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      sourceExts,
      assetExts: [...assetExts, 'hcscript'],
    },
  };
})();

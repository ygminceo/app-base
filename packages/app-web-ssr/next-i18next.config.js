const i18nConfig = require('../lib-frontend/src/locale/i18n/i18n.config');

module.exports = {
  i18n: {
    locales: i18nConfig.supportedLngs,
    defaultLocale: i18nConfig.fallbackLng,
  },
};

module.exports = {
  fallbackLng: 'en',
  supportedLngs: ['en', 'kr'],
  ns: [],
  //TODO: get from env variable
  // debug: process.ENV.NODE_ENV === 'development',
  debug: true,
  interpolation: { escapeValue: false },
  react: { useSuspense: false, defaultTransParent: 'div' },
};

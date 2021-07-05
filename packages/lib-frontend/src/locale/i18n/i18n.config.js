module.exports = {
  fallbackLng: 'en-US',
  supportedLngs: ['en-US', 'kr'],
  ns: [],
  //TODO: get from env variable
  // debug: process.ENV.NODE_ENV === 'development',
  debug: true,
  interpolation: { escapeValue: false },
  react: { useSuspense: false, defaultTransParent: 'div' },
};

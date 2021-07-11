export { default as _Detector } from 'i18next-browser-languagedetector';

export const detection = {
  order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  lookupCookie: 'lng',
	lookupLocalStorage: 'lng',
  caches: ['localStorage', 'cookie'],
  cookieOptions: { path: '/', sameSite: true },
};

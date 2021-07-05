import { config } from '@lib/common/core/utils/Config/Config';

export { default as _Backend } from 'i18next-http-backend';

const PUBLIC_URL = config.get<string>('REACT_APP_STATIC_URL', '');

export const backend = {
  loadPath: `${PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
};

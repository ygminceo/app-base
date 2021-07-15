import i18next from 'i18next';
import { _UseLocaleReturnsModel } from '@lib/frontend/locale/hooks/useLocale/internal/_useLocale.model';

export const _useLocale = (): _UseLocaleReturnsModel => ({
  locale: i18next.language,
  onLocaleChange: i18next.changeLanguage,
});

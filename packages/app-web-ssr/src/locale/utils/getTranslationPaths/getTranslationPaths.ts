import { GetStaticPaths } from 'next';
import { i18n } from '../../../../next-i18next.config';

export const getTranslationPaths: GetStaticPaths = async () => ({
  paths: i18n.locales.map((locale) => ({ params: { locale } })),
  fallback: false,
});

import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '../../../../next-i18next.config';

export const getTranslationProps = (ns?: string[]) => async ({
  params,
}: GetStaticPropsContext | GetServerSidePropsContext) => {
  const locale = (params && (params.locale as string)) || i18n.defaultLocale;
  return {
    props: {
      ...(await serverSideTranslations(locale, ns)),
    },
  };
};

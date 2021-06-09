import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getTranslationProps =
  (ns?: string[]) =>
  async ({ locale }: GetStaticPropsContext | GetServerSidePropsContext) => ({
    props: {
      ...(locale ? await serverSideTranslations(locale, ns) : null),
    },
  });

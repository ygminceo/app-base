import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getTranslationProps =
  (ns?: string[]) =>
  async ({ params }: GetStaticPropsContext | GetServerSidePropsContext) => ({
    props: {
      ...(params?.locale ? await serverSideTranslations(params?.locale as string, ns) : null),
    },
  });

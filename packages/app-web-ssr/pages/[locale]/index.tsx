import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { APP } from '@lib/common/app/constants';
import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { COMMON } from '@lib/common/core/constants';
import { LANDING } from '@lib/common/landing/constants';
import { USER } from '@lib/common/user/constants';
import { LandingPage } from '@lib/frontend/landing/pages/Landing/Landing.page';
import { getTranslationProps } from '@app/web-ssr/locale/utils/getTranslationProps/getTranslationProps';
import { i18n } from '../../next-i18next.config';

const Landing = () => <LandingPage />;

export const getStaticProps: GetStaticProps = getTranslationProps([
  AUTHENTICATION,
  COMMON,
  APP,
  LANDING,
  USER,
]);

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: i18n.locales.map((locale) => ({ params: { locale } })),
  fallback: false,
});

export default Landing;

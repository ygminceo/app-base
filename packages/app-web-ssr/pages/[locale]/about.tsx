import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { APP } from '@lib/common/app/constants';
import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { COMMON } from '@lib/common/core/constants';
import { LANDING } from '@lib/common/landing/constants';
import { USER } from '@lib/common/user/constants';
import { AboutPage } from '@lib/frontend/landing/pages/About/About.page';
import { getTranslationPaths } from '@app/web-ssr/locale/utils/getTranslationPaths/getTranslationPaths';
import { getTranslationProps } from '@app/web-ssr/locale/utils/getTranslationProps/getTranslationProps';

const Page = () => <AboutPage />;

export const getStaticProps: GetStaticProps = getTranslationProps([
  AUTHENTICATION,
  COMMON,
  APP,
  LANDING,
  USER,
]);

export const getStaticPaths: GetStaticPaths = getTranslationPaths;

export default Page;

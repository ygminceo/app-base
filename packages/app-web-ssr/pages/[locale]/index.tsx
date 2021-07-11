import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { APP } from '@lib/common/app/constants';
import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { BOT } from '@lib/common/chat/constants';
import { COMMON } from '@lib/common/core/constants';
import { LANDING } from '@lib/common/landing/constants';
import { USER } from '@lib/common/user/constants';
import { LandingPage } from '@lib/frontend/landing/pages/Landing/Landing.page';
import { getTranslationPaths } from '@app/web-ssr/locale/utils/getTranslationPaths/getTranslationPaths';
import { getTranslationProps } from '@app/web-ssr/locale/utils/getTranslationProps/getTranslationProps';

const Page = () => <LandingPage />;

export const getStaticProps: GetStaticProps = getTranslationProps([
  AUTHENTICATION,
  COMMON,
  APP,
  LANDING,
  USER,
  BOT,
]);

export const getStaticPaths: GetStaticPaths = getTranslationPaths;

export default Page;

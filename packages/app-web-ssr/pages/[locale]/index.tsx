import { GetStaticPaths, GetStaticProps } from 'next';
import { APP } from '@lib/common/app/constants';
import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { COMMON } from '@lib/common/core/constants';
import { LANDING } from '@lib/common/landing/constants';
import { getTranslationProps } from '@app/web-ssr/locale/utils/getTranslationProps/getTranslationProps';
import { HomePage } from '@app/web-ssr/pages/Home/Home.page';
import { i18n } from '../../next-i18next.config';

const Home = () => <HomePage />;

export const getStaticProps: GetStaticProps = getTranslationProps([
  AUTHENTICATION,
  COMMON,
  APP,
  LANDING,
]);

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: i18n.locales.map((locale) => ({ params: { locale } })),
  fallback: false,
});

export default Home;

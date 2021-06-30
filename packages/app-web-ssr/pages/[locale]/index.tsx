import { getTranslationProps } from '@app/web-ssr/locale/utils/getTranslationProps/getTranslationProps';
import { HomePage } from '@app/web-ssr/pages/Home/Home.page';
import { GetStaticProps, GetStaticPaths } from 'next';
import { i18n } from '../../next-i18next.config';

const Home = () => <HomePage />;

export const getStaticProps: GetStaticProps = getTranslationProps(['common', 'app']);

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: i18n.locales.map((locale) => ({ params: { locale } })),
  fallback: false,
});

export default Home;

import { getTranslationProps } from '@app/web-ssr/locale/utils/getTranslationProps';
import { HomePage } from '@app/web-ssr/pages/Home/Home.page';
import { GetStaticProps } from 'next';

const Home = () => <HomePage />;

export const getStaticProps: GetStaticProps = getTranslationProps(['common']);

export default Home;

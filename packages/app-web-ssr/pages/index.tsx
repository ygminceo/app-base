import { useRouter } from 'next/router';
import { useEffect } from 'react';
import i18nConfig from '@lib/frontend/locale/i18n/i18n.config';

const Home = () => {
  const { pathname, push } = useRouter();

  // TODO: get from cookie?
  useEffect(() => {
    if (pathname === '/') {
      push(`/${i18nConfig.fallbackLng}`);
    }
  }, []);

  return null;
};

export default Home;

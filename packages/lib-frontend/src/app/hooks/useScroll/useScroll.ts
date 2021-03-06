import { useEffect, useState } from 'react';
import { UseScrollModel } from '@lib/frontend/app/hooks/useScroll/useScroll.model';
import { useUnmount } from '@lib/frontend/core/hooks';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';

export const useScroll: UseScrollModel = () => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  const handleScroll = (y: number) => setIsMinimized(y > 0);
  const scrollListener = () => handleScroll(document.documentElement.scrollTop);

  useEffect(() => {
    if (Platform.isWeb) {
      window.addEventListener('scroll', scrollListener);
    }
  }, []);
  useUnmount(() => {
    if (Platform.isWeb) {
      window.removeEventListener('scroll', scrollListener);
    }
  });

  return { isMinimized, handleScroll };
};

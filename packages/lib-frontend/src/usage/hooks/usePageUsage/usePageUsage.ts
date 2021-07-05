import { useEffect } from 'react';
import { useUsage } from '@lib/frontend/usage/hooks';

export const usePageUsage = () => {
  const { track, isReady } = useUsage();

  useEffect(() => {
    console.warn('ready!');
  }, [isReady]);
}
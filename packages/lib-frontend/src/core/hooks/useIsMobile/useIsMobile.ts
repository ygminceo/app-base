import { useDimension } from '@lib/frontend/core/hooks';

export const useIsMobile = (): boolean => {
  const { width } = useDimension();
  return width !== undefined && width < 700;
};

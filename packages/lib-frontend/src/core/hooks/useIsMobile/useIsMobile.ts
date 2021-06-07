import { useDimension } from '@lib/frontend/core/hooks';
import { UseIsMobileReturns } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile.model';

export const useIsMobile = (): UseIsMobileReturns => {
  const { width } = useDimension();
  return width !== undefined && width < 700;
};

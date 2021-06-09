import { UsageContext } from '@lib/frontend/usage/containers/UsageProvider/UsageProvider';
import { UsageContextType } from '@lib/frontend/usage/containers/UsageProvider/UsageProvider.model';
import { useContext } from 'react';

export const useUsage = () => {
  const usage = useContext<UsageContextType>(UsageContext);
  return usage;
};

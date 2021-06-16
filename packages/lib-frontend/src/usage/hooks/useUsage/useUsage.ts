import { useContext } from 'react';
import { UsageContext } from '@lib/frontend/usage/containers/UsageProvider/UsageProvider';
import { UsageContextModel } from '@lib/frontend/usage/containers/UsageProvider/UsageProvider.model';

export const useUsage = () => {
  const usage = useContext<UsageContextModel>(UsageContext);
  return usage;
};

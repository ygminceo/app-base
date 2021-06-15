import { UsageContext } from '@lib/frontend/usage/containers/UsageProvider/UsageProvider';
import { UsageContextModel } from '@lib/frontend/usage/containers/UsageProvider/UsageProvider.model';
import { useContext } from 'react';

export const useUsage = () => {
  const usage = useContext<UsageContextModel>(UsageContext);
  return usage;
};

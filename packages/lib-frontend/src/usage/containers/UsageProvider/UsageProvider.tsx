import React, { createContext, useEffect, useState } from 'react';
import { useAccount } from '@lib/frontend/account/stores/account.reducer';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';
import {
  UsageContextModel,
  UsageProviderProps,
} from '@lib/frontend/usage/containers/UsageProvider/UsageProvider.model';
import { _initialize } from '@lib/frontend/usage/containers/UsageProvider/_internal/_initialize';

const usageDefault = {
  identify: () => console.warn('Tracker not ready'),
  reset: () => console.warn('Tracker not ready'),
  track: () => console.warn('Tracker not ready'),
};

export const UsageContext = createContext<UsageContextModel>(usageDefault);

export const UsageProvider = ({ children }: UsageProviderProps) => {
  const [usage, setUsage] = useState<UsageContextModel>(usageDefault);

  const account = useAccount();

  useEffect(() => {
    if (!Platform.isDev) {
      _initialize().then((usage) => usage && setUsage(usage));
    }
  }, []);

  // TODO: get usage tracking enabled from preference / storage
  useEffect(() => {
    if (usage) {
      if (account) {
        usage.identify(account._id);
      } else if (account === null) {
        usage.reset();
      }
    }
  }, [usage, account]);

  return <UsageContext.Provider value={usage}>{children}</UsageContext.Provider>;
};

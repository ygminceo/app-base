import React, { createContext, useEffect, useState } from 'react';
import { useAccount } from '@lib/frontend/account/stores/account.reducer';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';
import {
  UsageContextModel,
  UsageProviderProps,
} from '@lib/frontend/usage/containers/UsageProvider/UsageProvider.model';
import { _initialize } from '@lib/frontend/usage/containers/UsageProvider/_internal/_initialize';

export const UsageContext = createContext<UsageContextModel>({
  isInitialized: false,
  track: () => console.warn('Tracker not ready'),
});

export const UsageProvider = ({ children }: UsageProviderProps) => {
  const [usage, setUsage] = useState<any>();
  const [isInitialized, setIsInitialized] = useState<boolean>(Platform.isWebSsr);

  const account = useAccount();

  useEffect(() => {
    _initialize().then((usageInstance) => {
      setUsage(usageInstance);
      setIsInitialized(true);
    });
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

  return <UsageContext.Provider value={usage}>{isInitialized && children}</UsageContext.Provider>;
};

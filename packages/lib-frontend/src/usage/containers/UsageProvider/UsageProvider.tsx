import React, { createContext, useEffect, useState } from 'react';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';
import {
  UsageContextModel,
  UsageProviderProps,
} from '@lib/frontend/usage/containers/UsageProvider/UsageProvider.model';
import { _initialize } from '@lib/frontend/usage/containers/UsageProvider/internal/_initialize';
import { useUser } from '@lib/frontend/user/stores/user.reducer';

const usageDefault: UsageContextModel = {
  isReady: false,
  identify: () => console.warn('Tracker not ready'),
  reset: () => console.warn('Tracker not ready'),
  track: () => console.warn('Tracker not ready'),
};

export const UsageContext = createContext<UsageContextModel>(usageDefault);

export const UsageProvider = ({ children }: UsageProviderProps) => {
  const [usage, setUsage] = useState<UsageContextModel>(usageDefault);

  const user = useUser();

  useEffect(() => {
    if (Platform.isNonProduction) {
      // TODO: mock?
      setUsage({
        isReady: true,
        identify: (...params) => console.warn(`Non production identify: ${JSON.stringify(params)}`),
        reset: () => console.warn('Non production reset'),
        track: (...params) => console.warn(`Non production track: ${JSON.stringify(params)}`),
      });
    } else {
      _initialize().then((usage) => usage && setUsage(usage));
    }
  }, []);

  // TODO: get usage tracking enabled from preference / storage
  useEffect(() => {
    if (usage.isReady) {
      if (user) {
        usage.identify(user._id);
      } else if (user === null) {
        usage.reset();
      }
    }
  }, [usage, user]);

  return <UsageContext.Provider value={usage}>{children}</UsageContext.Provider>;
};

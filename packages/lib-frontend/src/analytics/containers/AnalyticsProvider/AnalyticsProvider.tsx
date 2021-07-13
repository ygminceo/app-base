import React, { createContext, useEffect, useState } from 'react';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';
import {
  AnalyticsContextModel,
  AnalyticsProviderProps,
} from '@lib/frontend/analytics/containers/AnalyticsProvider/AnalyticsProvider.model';
import { _initialize } from '@lib/frontend/analytics/containers/AnalyticsProvider/internal/_initialize';
import { useUser } from '@lib/frontend/user/stores/user.reducer';

export const analyticsDefault: AnalyticsContextModel = {
  isReady: false,
  identify: () => console.warn('Tracker not ready'),
  reset: () => console.warn('Tracker not ready'),
  track: () => console.warn('Tracker not ready'),
};

export const analyticsMock: AnalyticsContextModel = {
  isReady: true,
  identify: (...params) => console.warn(`Non production identify: ${JSON.stringify(params)}`),
  reset: () => console.warn('Non production reset'),
  track: (...params) => console.warn(`Non production track: ${JSON.stringify(params)}`),
};


export const AnalyticsContext = createContext<AnalyticsContextModel>(analyticsDefault);

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const [analytics, setAnalytics] = useState<AnalyticsContextModel>(analyticsDefault);

  const user = useUser();

  useEffect(() => {
    if (Platform.isNonProduction) {
      setAnalytics(analyticsMock);
    } else {
      _initialize().then((analytics) => setAnalytics(analytics));
    }
  }, []);

  // TODO: get analytics tracking enabled from preference / storage
  useEffect(() => {
    if (analytics.isReady) {
      if (user) {
        analytics.identify(user._id);
      } else if (user === null) {
        analytics.reset();
      }
    }
  }, [analytics, user]);

  return <AnalyticsContext.Provider value={analytics}>{children}</AnalyticsContext.Provider>;
};

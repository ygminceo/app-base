import React from 'react';
import { LANDING } from '@lib/common/landing/constants';
import { usePageAnalytics } from '@lib/frontend/analytics/hooks';
import { LandingLayout } from '@lib/frontend/landing/layouts';
import { LandingPageProps } from '@lib/frontend/landing/pages/Landing/Landing.model';

export const LandingPage = ({ ...props }: LandingPageProps) => {
  usePageAnalytics({ name: LANDING });
  return <LandingLayout />;
};

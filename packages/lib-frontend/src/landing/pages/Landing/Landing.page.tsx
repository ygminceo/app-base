import { LandingLayout } from '@lib/frontend/landing/layouts';
import { LandingPageProps } from '@lib/frontend/landing/pages/Landing/Landing.model';
import { usePageUsage } from '@lib/frontend/usage/hooks';
import React from 'react';

export const LandingPage = ({ ...props }: LandingPageProps) => {
  usePageUsage();
  return <LandingLayout />;
};

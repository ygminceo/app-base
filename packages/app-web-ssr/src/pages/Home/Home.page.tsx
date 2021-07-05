import React from 'react';
import { LandingLayout } from '@lib/frontend/landing/layouts';
import { usePageUsage } from '@lib/frontend/usage/hooks';
import { HomePageProps } from '@app/web-ssr/pages/Home/Home.model';

export const HomePage = ({ ...props }: HomePageProps) => {
  usePageUsage();
  return <LandingLayout />;
};

import React from 'react';
import { LandingLayout } from '@lib/frontend/app/layouts';
import { RouteLink } from '@lib/frontend/routing/components';
import { HomePageProps } from '@app/web-ssr/pages/Home/Home.model';

export const HomePage = ({ ...props }: HomePageProps) => {
  return (
    <LandingLayout>
      <RouteLink to="/test">x</RouteLink>
    </LandingLayout>
  );
};

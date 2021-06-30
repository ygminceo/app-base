import React from 'react';
import { LandingLayout } from '@lib/frontend/app/layouts';
import { Icon, Text, Wrapper } from '@lib/frontend/core/components';
import { HomePageProps } from '@app/web-ssr/pages/Home/Home.model';

export const HomePage = ({ ...props }: HomePageProps) => {
  return (
    <LandingLayout>
    </LandingLayout>
  );
};

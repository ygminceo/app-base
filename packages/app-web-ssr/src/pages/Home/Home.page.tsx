import React from 'react';
import { LandingLayout } from '@lib/frontend/landing/layouts';
import { HomePageProps } from '@app/web-ssr/pages/Home/Home.model';
import { Wrapper } from '@lib/frontend/core/components';

export const HomePage = ({ ...props }: HomePageProps) => {
  return (
    <LandingLayout>
      <Wrapper grow spacing>
      </Wrapper>
    </LandingLayout>
  );
};

import React from 'react';
import { LANDING } from '@lib/common/landing/constants';
import { usePageAnalytics } from '@lib/frontend/analytics/hooks';
import { Wrapper } from '@lib/frontend/core/components';
import { ScratchPad } from '@lib/frontend/core/containers';
import { LandingLayout } from '@lib/frontend/landing/layouts';
import { LandingPageProps } from '@lib/frontend/landing/pages/Landing/Landing.model';

export const LandingPage = ({ ...props }: LandingPageProps) => {
  usePageAnalytics({ name: LANDING });
  return (
    <LandingLayout>
      <ScratchPad />
    </LandingLayout>
  );
};

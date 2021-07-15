import React from 'react';
import { LANDING } from '@lib/common/landing/constants';
import { usePageAnalytics } from '@lib/frontend/analytics/hooks';
import { CardElement } from '@lib/frontend/billing/components';
import { Text, Wrapper } from '@lib/frontend/core/components';
import { LandingLayout } from '@lib/frontend/landing/layouts';
import { LandingPageProps } from '@lib/frontend/landing/pages/Landing/Landing.model';

export const LandingPage = ({ ...props }: LandingPageProps) => {
  usePageAnalytics({ name: LANDING });
  return (
    <LandingLayout>
      <Wrapper grow contrast p center alignCenter spacing>
        {/* <Text contrast xlarge>
          Introducing{' '}
          <Text xlarge primary>
            VISA Card
          </Text>
        </Text> */}

        <CardElement />
      </Wrapper>
    </LandingLayout>
  );
};

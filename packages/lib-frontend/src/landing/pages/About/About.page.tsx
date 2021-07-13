import React from 'react';
import { ABOUT, LANDING } from '@lib/common/landing/constants';
import { usePageAnalytics } from '@lib/frontend/analytics/hooks';
import { CenterLayout } from '@lib/frontend/app/layouts';
import { Text, Wrapper } from '@lib/frontend/core/components';
import { LandingLayout } from '@lib/frontend/landing/layouts';
import { AboutPageProps } from '@lib/frontend/landing/pages/About/About.model';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const AboutPage = ({ ...props }: AboutPageProps) => {
  const { t } = useTranslation([LANDING]);
  usePageAnalytics({ name: ABOUT });

  return (
    <LandingLayout>
      <CenterLayout>
        <Wrapper p spacing>
          <Text title>{t('landing:labels.about')}</Text>
          <Text>{t('landing:messages.about')}</Text>
        </Wrapper>
      </CenterLayout>
    </LandingLayout>
  );
};

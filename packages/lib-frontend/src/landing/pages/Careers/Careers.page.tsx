import React from 'react';
import { CAREERS, LANDING } from '@lib/common/landing/constants';
import { CenterLayout } from '@lib/frontend/app/layouts';
import { Text, Wrapper } from '@lib/frontend/core/components';
import { LandingLayout } from '@lib/frontend/landing/layouts';
import { CareersPageProps } from '@lib/frontend/landing/pages/Careers/Careers.model';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { usePageUsage } from '@lib/frontend/usage/hooks';

export const CareersPage = ({ ...props }: CareersPageProps) => {
  const { t } = useTranslation([LANDING]);
  usePageUsage({ name: CAREERS });

  return (
    <LandingLayout>
      <CenterLayout>
        <Wrapper p spacing>
          <Text title>{t('landing:labels.careers')}</Text>
          <Text>{t('landing:messages.careers')}</Text>
        </Wrapper>
      </CenterLayout>
    </LandingLayout>
  );
};

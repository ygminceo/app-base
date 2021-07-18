import React from 'react';
import { config } from '@lib/common/core/utils/Config/Config';
import { CAREERS, LANDING } from '@lib/common/landing/constants';
import { usePageAnalytics } from '@lib/frontend/analytics/hooks';
import { CenterLayout } from '@lib/frontend/app/layouts';
import { EmailLink, Text, Wrapper } from '@lib/frontend/core/components';
import { LandingLayout } from '@lib/frontend/landing/layouts';
import { CareersPageProps } from '@lib/frontend/landing/pages/Careers/Careers.model';
import { Trans } from '@lib/frontend/locale/components';
import { useTranslation } from '@lib/frontend/locale/hooks';

const REACT_APP_CONTACT_EMAIL = config.get<string>('REACT_APP_CONTACT_EMAIL', '');

export const CareersPage = ({ ...props }: CareersPageProps) => {
  const { t } = useTranslation([LANDING]);

  usePageAnalytics({ name: CAREERS });

  return (
    <LandingLayout>
      <CenterLayout>
        <Wrapper p spacing>
          <Text title>{t('landing:labels.careers')}</Text>
          <Trans
            ns="landing"
            i18nKey="messages.careers"
            components={[<EmailLink small bold email={REACT_APP_CONTACT_EMAIL} />]}
            values={{ email: REACT_APP_CONTACT_EMAIL }}
          />
        </Wrapper>
      </CenterLayout>
    </LandingLayout>
  );
};

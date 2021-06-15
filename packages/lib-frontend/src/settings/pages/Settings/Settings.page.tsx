import { AppLayout } from '@lib/frontend/app/layouts';
import { SearchField, Text, Wrapper } from '@lib/frontend/core/components';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { Profile } from '@lib/frontend/settings/containers';
import { SettingsPageProps } from '@lib/frontend/settings/pages/Settings/Settings.model';
import React from 'react';

export const SettingsPage = ({ ...props }: SettingsPageProps) => {
  const { t } = useTranslation(['settings']);
  return (
    <AppLayout>
      <Wrapper grow spacing p>
        <Text title>{t('settings:labels.settings')}</Text>
        <Profile />
      </Wrapper>
    </AppLayout>
  );
};

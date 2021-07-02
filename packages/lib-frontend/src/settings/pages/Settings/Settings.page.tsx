import React from 'react';
import { SETTINGS } from '@lib/common/settings/constants';
import { Divider, Text, Wrapper } from '@lib/frontend/core/components';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { Profile } from '@lib/frontend/settings/containers';
import { SettingsPageProps } from '@lib/frontend/settings/pages/Settings/Settings.model';

export const SettingsPage = ({ ...props }: SettingsPageProps) => {
  const { t } = useTranslation([SETTINGS]);
  return (
    <Wrapper grow spacing p>
      <Text title>{t('settings:labels.settings')}</Text>
      <Divider />
      <Profile />
    </Wrapper>
  );
};

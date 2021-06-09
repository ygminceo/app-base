import { HomePageProps } from '@app/web-ssr/pages/Home/Home.model';
import { Icon, Text, Wrapper } from '@lib/frontend/core/components';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const HomePage = ({ ...props }: HomePageProps) => {
  const { t } = useTranslation(['common']);
  return (
    <Wrapper grow p>
      <Text>home page</Text>
      <Text>{t('common:labels.emailAddress')}</Text>
      <Icon icon="cash" />
    </Wrapper>
  );
};

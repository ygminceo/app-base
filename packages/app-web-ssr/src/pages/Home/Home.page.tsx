import { HomePageProps } from '@app/web-ssr/pages/Home/Home.model';
import { Wrapper } from '@lib/frontend/core/components';
import React from 'react';

export const HomePage = ({ ...props }: HomePageProps) => {
  return (
    <Wrapper grow p>
      <Wrapper grow />
      {/* <Text>home page</Text>
      <Text>{t('common:labels.emailAddress')}</Text>
      <Icon icon="cash" /> */}
    </Wrapper>
  );
};

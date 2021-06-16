import React from 'react';
import { Wrapper } from '@lib/frontend/core/components';
import { HomePageProps } from '@app/web-ssr/pages/Home/Home.model';

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

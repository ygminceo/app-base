import { AccountPageProps } from '@lib/frontend/account/pages/Account/Account.model';
import { AppLayout } from '@lib/frontend/app/layouts';
import { Text, Wrapper } from '@lib/frontend/core/components';
import React from 'react';

export const AccountPage = ({ ...props }: AccountPageProps) => {
  return (
    <AppLayout>
      <Wrapper grow>
        <Text>Hello Account</Text>
      </Wrapper>
    </AppLayout>
  );
};

import React from 'react';
import { AccountPageProps } from '@lib/frontend/account/pages/Account/Account.model';
import { Text, Wrapper } from '@lib/frontend/core/components';

export const AccountPage = ({ ...props }: AccountPageProps) => {
  return (
    <Wrapper grow>
      <Text>Hello Account</Text>
    </Wrapper>
  );
};

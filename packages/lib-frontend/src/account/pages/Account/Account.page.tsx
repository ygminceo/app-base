import { AccountPageProps } from '@lib/frontend/account/pages/Account/Account.model';
import { Text, Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import React from 'react';

export const AccountPage = ({ ...props }: AccountPageProps) => {
  const { styles } = useStyles(props);
  return (
    <Wrapper grow style={styles}>
      <Text>Hello Account</Text>
    </Wrapper>
  );
};

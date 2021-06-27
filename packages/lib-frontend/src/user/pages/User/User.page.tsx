import React from 'react';
import { Text, Wrapper } from '@lib/frontend/core/components';
import { UserPageProps } from '@lib/frontend/user/pages/User/User.model';

export const UserPage = ({ ...props }: UserPageProps) => {
  return (
    <Wrapper grow>
      <Text>Hello User</Text>
    </Wrapper>
  );
};

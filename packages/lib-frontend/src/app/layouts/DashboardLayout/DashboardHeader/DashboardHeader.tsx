import React from 'react';
import { Header } from '@lib/frontend/app/components';
import { DashboardHeaderProps } from '@lib/frontend/app/layouts/DashboardLayout/DashboardHeader/DashboardHeader.model';
import { DashboardHeaderMenu } from '@lib/frontend/app/layouts/DashboardLayout/DashboardHeader/DashboardHeaderMenu/DashboardHeaderMenu';
import { SignInButton } from '@lib/frontend/authentication/containers/SignInButton/SignInButton';
import { useIsAuthenticated } from '@lib/frontend/authentication/stores/authentication.reducer';
import { Wrapper } from '@lib/frontend/core/components';

export const DashboardHeader = ({ ...props }: DashboardHeaderProps) => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <Header>
      <Wrapper grow row alignCenter end spacingTight>
        {isAuthenticated ? <DashboardHeaderMenu /> : <SignInButton />}
      </Wrapper>
    </Header>
  );
};

import React from 'react';
import { Header } from '@lib/frontend/app/components';
import { DashboardHeaderProps } from '@lib/frontend/app/containers/DashboardHeader/DashboardHeader.model';
import { DashboardHeaderMenu } from '@lib/frontend/app/containers/DashboardHeader/DashboardHeaderMenu/DashboardHeaderMenu';
import { Wrapper } from '@lib/frontend/core/components';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { ThemeSwitch } from '@lib/frontend/theme/containers';

export const DashboardHeader = ({ ...props }: DashboardHeaderProps) => {
  return (
    <Header>
      <Wrapper grow row alignCenter end spacingTight>
        <ThemeSwitch />
        <DashboardHeaderMenu />
      </Wrapper>
    </Header>
  );
};

import React from 'react';
import { Header } from '@lib/frontend/app/components';
import { DashboardHeaderProps } from '@lib/frontend/app/layouts/DashboardLayout/DashboardHeader/DashboardHeader.model';
import { DashboardHeaderMenu } from '@lib/frontend/app/layouts/DashboardLayout/DashboardHeader/DashboardHeaderMenu/DashboardHeaderMenu';
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

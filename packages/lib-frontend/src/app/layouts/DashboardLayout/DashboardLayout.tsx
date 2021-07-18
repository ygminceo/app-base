import React from 'react';
import { HEADER_HEIGHT } from '@lib/frontend/app/components/Header/Header.constants';
import { Alerts } from '@lib/frontend/app/containers';
import { useScroll } from '@lib/frontend/app/hooks';
import { DashboardHeader } from '@lib/frontend/app/layouts/DashboardLayout/DashboardHeader/DashboardHeader';
import { DashboardLayoutProps } from '@lib/frontend/app/layouts/DashboardLayout/DashboardLayout.model';
import { Wrapper } from '@lib/frontend/core/components';

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { isMinimized, handleScroll } = useScroll();

  return (
    <Wrapper grow fill relative>
      <DashboardHeader />

      <Wrapper grow pTop={HEADER_HEIGHT} onScroll={({ y }) => handleScroll(y)}>
        {children}
      </Wrapper>

      <Alerts />
    </Wrapper>
  );
};

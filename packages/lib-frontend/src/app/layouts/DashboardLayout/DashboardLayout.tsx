import React from 'react';
import { HEADER_HEIGHT } from '@lib/frontend/app/components/Header/Header.constants';
import { Alerts } from '@lib/frontend/app/containers';
import { useScroll } from '@lib/frontend/app/hooks';
// import { useScroll } from '@lib/frontend/app/hooks';
import { DashboardLayoutProps } from '@lib/frontend/app/layouts/DashboardLayout/DashboardLayout.model';
import { Wrapper } from '@lib/frontend/core/components';

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { isMinimized, handleScroll } = useScroll();

  return (
    <Wrapper grow fill relative>
      {/* <Header isMinimized={isMinimized} /> */}

      {/* <Wrapper pTop={HEADER_HEIGHT_DEFAULT} absoluteLeft>
        <AppSideMenu />
      </Wrapper> */}

      <Wrapper
        grow
        pTop={HEADER_HEIGHT}
        // pLeft={APP_SIDE_MENU_WIDTH}
        // verticalScrollable
        onScroll={({ y }) => handleScroll(y)}>
        {children}
      </Wrapper>

      <Alerts />
    </Wrapper>
  );
};

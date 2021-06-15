import { AppHeader, AppSideMenu } from '@lib/frontend/app/containers';
import {
  APP_HEADER_HEIGHT_DEFAULT,
  APP_HEADER_MINIMIZE_SCROLL_THRESHOLD,
} from '@lib/frontend/app/containers/AppHeader/AppHeader.constants';
import { APP_SIDE_MENU_WIDTH } from '@lib/frontend/app/containers/AppSideMenu/AppSideMenu.constants';
import { AppLayoutProps } from '@lib/frontend/app/layouts/AppLayout.model';
import { Wrapper } from '@lib/frontend/core/components';
import { useUnmount } from '@lib/frontend/core/hooks';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';
import React, { useEffect, useState } from 'react';

export const AppLayout = ({ children }: AppLayoutProps) => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  const handleScroll = (y: number) => setIsMinimized(y > APP_HEADER_MINIMIZE_SCROLL_THRESHOLD);

  const scrollListener = () => handleScroll(document.documentElement.scrollTop);

  useEffect(() => {
    if (Platform.isWebApp) {
      window.addEventListener('scroll', scrollListener);
    }
  }, []);

  useUnmount(() => {
    if (Platform.isWebApp) {
      window.removeEventListener('scroll', scrollListener);
    }
  });

  return (
    <Wrapper grow fill relative>
      <Wrapper safe above absoluteTop>
        <AppHeader isMinimized={isMinimized} />
      </Wrapper>

      {/* <Wrapper pTop={APP_HEADER_HEIGHT_DEFAULT} absoluteLeft>
        <AppSideMenu />
      </Wrapper> */}

      <Wrapper
        grow
        pTop={APP_HEADER_HEIGHT_DEFAULT}
        // pLeft={APP_SIDE_MENU_WIDTH}
        verticalScrollable
        onScroll={({ y }) => handleScroll(y)}>
        {children}
      </Wrapper>
    </Wrapper>
  );
};

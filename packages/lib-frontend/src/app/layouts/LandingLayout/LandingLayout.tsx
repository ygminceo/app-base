import React from 'react';
import { HEADER_HEIGHT } from '@lib/frontend/app/components/Header/Header.constants';
import { Alerts, LandingHeader } from '@lib/frontend/app/containers';
import { useScroll } from '@lib/frontend/app/hooks';
import { LandingLayoutProps } from '@lib/frontend/app/layouts/LandingLayout/LandingLayout.model';
import { Wrapper } from '@lib/frontend/core/components';

export const LandingLayout = ({ children }: LandingLayoutProps) => {
  const { isMinimized, handleScroll } = useScroll();

  return (
    <Wrapper grow fill relative>
      <LandingHeader />

      <Wrapper grow pTop={HEADER_HEIGHT} verticalScrollable onScroll={({ y }) => handleScroll(y)}>
        {children}
      </Wrapper>

      <Alerts />
    </Wrapper>
  );
};

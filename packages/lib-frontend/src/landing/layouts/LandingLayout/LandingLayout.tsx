import React from 'react';
import { HEADER_HEIGHT } from '@lib/frontend/app/components/Header/Header.constants';
import { Alerts } from '@lib/frontend/app/containers';
import { useScroll } from '@lib/frontend/app/hooks';
import { Wrapper } from '@lib/frontend/core/components';
import { LandingFooter, LandingHeader } from '@lib/frontend/landing/containers';
import { LandingLayoutProps } from '@lib/frontend/landing/layouts/LandingLayout/LandingLayout.model';

export const LandingLayout = ({ children }: LandingLayoutProps) => {
  const { isMinimized, handleScroll } = useScroll();

  return (
    <Wrapper grow fill relative>
      <LandingHeader />

      <Wrapper
        pTop={HEADER_HEIGHT}
        verticalScrollable
        grow
        shrink
        onScroll={({ y }) => handleScroll(y)}>
        {children}
      </Wrapper>

      <LandingFooter />

      <Alerts />
    </Wrapper>
  );
};

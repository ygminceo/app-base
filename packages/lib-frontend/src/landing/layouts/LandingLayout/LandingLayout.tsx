import React from 'react';
import { HEADER_HEIGHT } from '@lib/frontend/app/components/Header/Header.constants';
import { Alerts } from '@lib/frontend/app/containers';
import { useScroll } from '@lib/frontend/app/hooks';
import { Link, Wrapper } from '@lib/frontend/core/components';
import { LandingHeader } from '@lib/frontend/landing/containers';
import { LandingLayoutProps } from '@lib/frontend/landing/layouts/LandingLayout/LandingLayout.model';

export const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <Wrapper grow fill relative>
      <LandingHeader />

      <Wrapper
        pTop={HEADER_HEIGHT}
        verticalScrollable
        grow
        shrink>
        {children}
      </Wrapper>

      {/* <LandingFooter /> */}

      <Alerts />
    </Wrapper>
  );
};

import { Logo, Wrapper } from '@lib/frontend/core/components';
import { LogoLayoutProps } from '@lib/frontend/core/layouts/LogoLayout/LogoLayout.model';
import React from 'react';

export const LogoLayout = ({ children }: LogoLayoutProps) => (
  <Wrapper grow>
    <Wrapper row center>
      <Logo />
    </Wrapper>
    <Wrapper grow overflowHidden relative>
      {children}
    </Wrapper>
  </Wrapper>
);

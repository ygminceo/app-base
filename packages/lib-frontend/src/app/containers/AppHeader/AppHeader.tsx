import { AppHeaderMenu } from '@lib/frontend/app/containers';
import { APP_HEADER_ID } from '@lib/frontend/app/containers/AppHeader/AppHeader.constants';
import { AppHeaderProps } from '@lib/frontend/app/containers/AppHeader/AppHeader.model';
import {
  getAppHeaderLogoStyle,
  getAppHeaderStyle,
} from '@lib/frontend/app/containers/AppHeader/AppHeader.style';
import { Logo, Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import React from 'react';

export const AppHeader = ({ ...props }: AppHeaderProps) => {
  const { styles } = useStyles(props, [getAppHeaderStyle]);
  const { computedStyles: logoStyles } = useStyles(props, [getAppHeaderLogoStyle]);
  return (
    <Wrapper
      nativeID={APP_HEADER_ID}
      style={styles}
      fullWidth
      animatable={{ transition: ['height'] }}
      row
      center
      alignCenter
      fill
      border>
      <Wrapper style={logoStyles} animatable={{ transition: ['scale'] }}>
        <Logo />
      </Wrapper>
      <Wrapper absoluteRight center mRightTight>
        <AppHeaderMenu />
      </Wrapper>
    </Wrapper>
  );
};

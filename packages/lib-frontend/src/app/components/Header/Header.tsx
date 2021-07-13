import React from 'react';
import { HEADER_ID } from '@lib/frontend/app/components/Header/Header.constants';
import { HeaderProps } from '@lib/frontend/app/components/Header/Header.model';
import { getHeaderStyle } from '@lib/frontend/app/components/Header/Header.style';
import { Logo, Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';

export const Header = ({ children, ...props }: HeaderProps) => {
  const { styles } = useStyles(props, [getHeaderStyle]);
  return (
    <Wrapper
      nativeID={HEADER_ID}
      style={styles}
      safe
      above
      absoluteTop
      fullWidth
      row
      alignCenter
      fill
      pLeft
      pRight
      spacing>
      <Logo />

      {children}
    </Wrapper>
  );
};

import React from 'react';
import { CenterLayoutProps } from '@lib/frontend/app/layouts/CenterLayout/CenterLayout.model';
import { getCenterLayoutStyle } from '@lib/frontend/app/layouts/CenterLayout/CenterLayout.style';
import { Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';

export const CenterLayout = ({ children, ...props }: CenterLayoutProps) => {
  const { styles } = useStyles(props, [getCenterLayoutStyle]);
  return (
    <Wrapper style={styles} grow selfCenter>
      {children}
    </Wrapper>
  );
};

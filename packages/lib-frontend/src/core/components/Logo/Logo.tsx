import React from 'react';
import { config } from '@lib/common/core/utils/Config/Config';
import { Image } from '@lib/frontend/core/components/Image/Image';
import { LogoProps } from '@lib/frontend/core/components/Logo/Logo.model';
import { getLogoStyle } from '@lib/frontend/core/components/Logo/Logo.style';
import { useStyles } from '@lib/frontend/core/hooks';
import { RouteLink } from '@lib/frontend/routing/components';

const PUBLIC_URL = config.get<string>('REACT_APP_STATIC_URL', '');

export const Logo = ({ light, ...props }: LogoProps) => {
  const { styles } = useStyles(props, [getLogoStyle]);
  return (
    <RouteLink to="/">
      <Image src={`${PUBLIC_URL}/images/logo_${light ? 'light' : 'dark'}.png`} style={styles} />
    </RouteLink>
  );
};

import React from 'react';
import { config } from '@lib/common/core/utils/Config/Config';
import { Image } from '@lib/frontend/core/components/Image/Image';
import { LogoProps } from '@lib/frontend/core/components/Logo/Logo.model';
import { getLogoStyle } from '@lib/frontend/core/components/Logo/Logo.style';
import { useStyles } from '@lib/frontend/core/hooks';
import { RouteLink } from '@lib/frontend/routing/components';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

const PUBLIC_URL = config.get<string>('REACT_APP_PUBLIC_URL', '');

export const Logo = ({ ...props }: LogoProps) => {
  const { styles } = useStyles(props, [getLogoStyle]);
  const isDark = useTheme<boolean>('isDark');
  return (
    <RouteLink to="">
      <Image src={`${PUBLIC_URL}/images/logo_${isDark ? 'light' : 'dark'}.png`} style={styles} />
    </RouteLink>
  );
};

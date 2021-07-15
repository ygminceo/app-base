import React from 'react';
import { config } from '@lib/common/core/utils/Config/Config';
import { Image, Link } from '@lib/frontend/core/components';
import { LogoProps } from '@lib/frontend/core/components/Logo/Logo.model';
import { getLogoStyle } from '@lib/frontend/core/components/Logo/Logo.style';
import { useStyles } from '@lib/frontend/core/hooks';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

const PUBLIC_URL = config.get<string>('REACT_APP_PUBLIC_URL', '');

export const Logo = ({ contrast, ...props }: LogoProps) => {
  const { styles } = useStyles(props, [getLogoStyle]);
  const isDark = useTheme<boolean>('isDark');
  return (
    <Link pathname="/">
      <Image
        src={`${PUBLIC_URL}/images/logo_${
          isDark ? (contrast ? 'dark' : 'light') : contrast ? 'light' : 'dark'
        }.png`}
        style={styles}
      />
    </Link>
  );
};

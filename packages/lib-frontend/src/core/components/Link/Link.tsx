import React from 'react';
import { LinkProps } from '@lib/frontend/core/components/Link/Link.model';
import { _Link } from '@lib/frontend/core/components/Link/internal/_Link';
import { useTextStyles } from '@lib/frontend/core/hooks';
import { colorStyle } from '@lib/frontend/core/styles/color.style';

export const Link = ({ ...props }: LinkProps) => {
  const { styles } = useTextStyles(props, [colorStyle.primary]);
  return <_Link style={styles} {...props} />;
};

import React from 'react';
import { Icon, Menu } from '@lib/frontend/core/components';
import { IconMenuProps } from '@lib/frontend/core/components/IconMenu/IconMenu.model';
import { useStyles } from '@lib/frontend/core/hooks';

export const IconMenu = ({ options, icon, ...props }: IconMenuProps) => {
  const { styles } = useStyles(props);
  return (
    <Menu
      options={options}
      anchor={(open) => <Icon style={styles} isPressed={open} xlarge icon={icon} />}
    />
  );
};

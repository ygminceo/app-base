import React from 'react';
import { Menu, Pressable } from '@lib/frontend/core/components';
import { DroppableMenuProps } from '@lib/frontend/core/components/DroppableMenu/DroppableMenu.model';
import { useStyles } from '@lib/frontend/core/hooks';
import { flexStyle } from '@lib/frontend/core/styles/flex.style';

export const DroppableMenu = ({ options, children, ...props }: DroppableMenuProps) => {
  const { styles } = useStyles(props, [flexStyle.selfBaseline]);
  return (
    <Menu
      {...props}
      style={styles}
      options={options}
      anchor={(open) => <Pressable isPressed={open}>{children}</Pressable>}
    />
  );
};

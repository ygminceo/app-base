import React from 'react';
import { Pressable } from '@lib/frontend/core/components';
import { PillProps } from '@lib/frontend/core/components/Pill/Pill.model';
import { useStyles } from '@lib/frontend/core/hooks';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';

export const Pill = ({ children, isActive, ...props }: PillProps) => {
  const { styles } = useStyles(props);
  return (
    <Pressable
      {...props}
      style={styles}
      isPressed={isActive}
      from={{
        backgroundColor: isActive
          ? CommonTheme.colors.primary.main
          : CommonTheme.colors.primary.light,
      }}
      to={{ backgroundColor: CommonTheme.colors.primary.main }}>
      {children}
    </Pressable>
  );
};

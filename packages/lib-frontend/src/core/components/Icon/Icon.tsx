import React from 'react';
import { Pressable } from '@lib/frontend/core/components';
import { IconProps } from '@lib/frontend/core/components/Icon/Icon.model';
import { getIconStyle } from '@lib/frontend/core/components/Icon/Icon.style';
import { _Icon } from '@lib/frontend/core/components/Icon/internal/_Icon';
import { useStyles, useTextStyles } from '@lib/frontend/core/hooks';

export const Icon = (props: IconProps) => {
  const { computedStyles: textStyles } = useTextStyles(props, []);
  const { inheritedStyles, computedStyles: iconStyles } = useStyles(props, [getIconStyle]);
  const { onPress, icon, isPressed } = props;

  const component = <_Icon style={textStyles} icon={icon} />;
  return onPress ? (
    <Pressable style={[inheritedStyles, iconStyles]} onPress={onPress} isPressed={isPressed}>
      {component}
    </Pressable>
  ) : (
    component
  );
};

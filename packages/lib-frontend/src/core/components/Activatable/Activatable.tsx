import { get } from 'lodash';
import React, { cloneElement, useState } from 'react';
import { Hoverable } from '@lib/frontend/core/components';
import { ActivatableProps } from '@lib/frontend/core/components/Activatable/Activatable.model';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';

export const Activatable = ({ children, ...props }: ActivatableProps) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const component = children(isPressed || isHovered);
  const cloned = cloneElement(component, {
    ...props,
    onPressIn: Platform.isTouch
      ? undefined
      : () => {
          const onPressIn = get(component, 'props.onPressIn');
          setIsPressed(true);
          return onPressIn && onPressIn();
        },
    onPressOut: Platform.isTouch
      ? undefined
      : () => {
          const onPressOut = get(component, 'props.onPressOut');
          setIsPressed(false);
          return onPressOut && onPressOut();
        },
    onPress: () => {
      if (Platform.isTouch) {
        setIsPressed(!isPressed);
      }
      const onPress = get(component, 'props.onPress');
      return onPress && onPress();
    },
  });

  return (
    <Hoverable onHoverIn={() => setIsHovered(true)} onHoverOut={() => setIsHovered(false)}>
      {cloned}
    </Hoverable>
  );
};

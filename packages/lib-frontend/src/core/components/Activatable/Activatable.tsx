import { get } from 'lodash';
import React, { cloneElement, useState } from 'react';
import { Hoverable } from '@lib/frontend/core/components';
import { ActivatableProps } from '@lib/frontend/core/components/Activatable/Activatable.model';

export const Activatable = ({ children, ...props }: ActivatableProps) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  let component = children(isHovered || isPressed);
  component = cloneElement(component, {
    ...props,
    onPressIn: () => {
      const onPressIn = get(children, 'props.onPressIn');
      setIsPressed(true);
      return onPressIn && onPressIn();
    },
    onPressOut: () => {
      const onPressOut = get(children, 'props.onPressOut');
      setIsPressed(false);
      return onPressOut && onPressOut();
    },
  });

  return (
    <Hoverable onHoverIn={() => setIsHovered(true)} onHoverOut={() => setIsHovered(false)}>
      {component}
    </Hoverable>
  );
};

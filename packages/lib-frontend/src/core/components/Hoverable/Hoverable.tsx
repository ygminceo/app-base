import { get, isFunction } from 'lodash';
import { Children, cloneElement, useCallback, useState } from 'react';
import {
  HoverableChildProps,
  HoverableProps,
} from '@lib/frontend/core/components/Hoverable/Hoverable.model';
import { isHoverEnabled } from '@lib/frontend/core/components/Hoverable/internal/_isHoverEnabled';
import { useUnmount } from '@lib/frontend/core/hooks';

export const Hoverable = ({ onHoverIn, onHoverOut, children }: HoverableProps) => {
  const [isHovered, setHovered] = useState<boolean>(false);
  const [showHover, setShowHover] = useState<boolean>(true);

  useUnmount(() => {
    setHovered(false);
    setShowHover(false);
  });

  const handleMouseEnter = useCallback(() => {
    if (isHoverEnabled() && !isHovered) {
      if (onHoverIn) onHoverIn();
      setHovered(true);
    }
  }, [isHovered, onHoverIn]);

  const handleMouseLeave = useCallback(() => {
    if (isHovered) {
      if (onHoverOut) onHoverOut();
      setHovered(false);
    }
  }, [isHovered, onHoverOut]);

  const handleGrant = useCallback(() => {
    const onPressIn = get(Children.only(child), 'props.onPressIn');
    onPressIn && onPressIn();
    setShowHover(false);
  }, []);

  const handleRelease = useCallback(() => {
    const onPressOut = get(Children.only(child), 'props.onPressOut');
    onPressOut && onPressOut();
    setShowHover(true);
  }, []);

  const child = isFunction(children) ? children(showHover && isHovered) : children;

  return cloneElement<HoverableChildProps>(Children.only(child), {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onResponderGrant: handleGrant,
    onResponderRelease: handleRelease,
    onPressIn: handleGrant,
    onPressOut: handleRelease,
  });
};

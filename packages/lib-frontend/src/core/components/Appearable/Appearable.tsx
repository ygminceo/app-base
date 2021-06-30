import React from 'react';
import { AppearableProps } from '@lib/frontend/core/components/Appearable/Appearable.model';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { useStyles } from '@lib/frontend/core/hooks';
import { shapeStyle } from '@lib/frontend/core/styles/shape.style';

export const Appearable = ({ children, isVisible, dimension, ...props }: AppearableProps) => {
  const { styles } = useStyles(props);
  return (
    <Wrapper
      style={styles}
      animatable={{
        animation: {
          from: isVisible ? shapeStyle.zoomOut : shapeStyle.zoomIn,
          to: isVisible ? shapeStyle.zoomIn : shapeStyle.zoomOut,
        },
      }}>
      {children}
    </Wrapper>
  );
};

import React from 'react';
import { Wrapper } from '@lib/frontend/core/components';
import { CircleProps } from '@lib/frontend/core/components/Circle/Circle.model';
import { getCircleStyle } from '@lib/frontend/core/components/Circle/Circle.style';
import { useViewStyles } from '@lib/frontend/core/hooks';

export const Circle = ({ children, ...props }: CircleProps) => {
  const { styles } = useViewStyles(props, [getCircleStyle]);
  return (
    <Wrapper {...props} style={styles}>
      {children}
    </Wrapper>
  );
};

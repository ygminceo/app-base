import React from 'react';
import { Wrapper } from '@lib/frontend/core/components';
import { RotatableProps } from '@lib/frontend/core/components/Rotatable/Rotatable.model';
import { getRotatableStyle } from '@lib/frontend/core/components/Rotatable/Rotatable.style';
import { useStyles } from '@lib/frontend/core/hooks';

export const Rotatable = ({ children, ...props }: RotatableProps) => {
  const { styles } = useStyles(props, [getRotatableStyle]);
  return (
    <Wrapper style={styles} animatable={{ transition: ['rotateX', 'rotateY', 'rotateZ'] }}>
      {children}
    </Wrapper>
  );
};

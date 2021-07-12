import React from 'react';
import { Icon, Wrapper } from '@lib/frontend/core/components';
import { ArrowProps } from '@lib/frontend/core/components/Arrow/Arrow.model';
import { getArrowStyle } from '@lib/frontend/core/components/Arrow/Arrow.style';
import { useStyles } from '@lib/frontend/core/hooks';

export const Arrow = ({ left, up, down, ...props }: ArrowProps) => {
  const { styles } = useStyles(props, [getArrowStyle]);
  return (
    <Wrapper style={styles} animatable={{ transition: ['rotate'] }}>
      <Icon icon={`chevron-${left ? 'left' : up ? 'up' : down ? 'down' : 'right'}`} />
    </Wrapper>
  );
};

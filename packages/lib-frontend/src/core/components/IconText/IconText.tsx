import React from 'react';
import { Icon, Text, Wrapper } from '@lib/frontend/core/components';
import { IconTextProps } from '@lib/frontend/core/components/IconText/IconText.model';
import { useTextStyles } from '@lib/frontend/core/hooks';

export const IconText = ({ icon, children, ...props }: IconTextProps) => {
  const { inheritedStyles, computedStyles } = useTextStyles(props);
  return (
    <Wrapper style={inheritedStyles} row alignCenter>
      <Icon style={computedStyles} icon={icon} {...props} />
      <Text {...props} pLeftTight>{children}</Text>
    </Wrapper>
  );
};

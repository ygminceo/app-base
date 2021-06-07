import { Text, Wrapper } from '@lib/frontend/core/components';
import { DividerProps } from '@lib/frontend/core/components/Divider/Divider.model';
import React from 'react';

export const Divider = ({ children, ...props }: DividerProps) => (
  <Wrapper {...props} fullWidth height={1} secondary center alignCenter>
    {children ? (
      <Wrapper pLeft pRight fill>
        <Text muted>{children}</Text>
      </Wrapper>
    ) : null}
  </Wrapper>
);

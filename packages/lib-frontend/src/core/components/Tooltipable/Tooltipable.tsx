import React from 'react';
import { Droppable, Text } from '@lib/frontend/core/components';
import { TooltipableProps } from '@lib/frontend/core/components/Tooltipable/Tooltipable.model';

export const Tooltipable = ({ children, tooltip, ...props }: TooltipableProps) => (
  <Droppable render={() => <Text>{tooltip}</Text>} {...props}>
    {children}
  </Droppable>
);

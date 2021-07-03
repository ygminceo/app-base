import { isFunction } from 'lodash';
import React from 'react';
import { Activatable, Dropdown, Wrapper } from '@lib/frontend/core/components';
import { DroppableProps } from '@lib/frontend/core/components/Droppable/Droppable.model';
import { useStyles } from '@lib/frontend/core/hooks';

export const Droppable = ({ render, children, ...props }: DroppableProps) => {
  const { styles } = useStyles(props);
  return (
    <Activatable>
      {(isActive) => (
        <Wrapper style={styles}>
          <Dropdown anchor={isFunction(children) ? children(isActive) : children} isOpen={isActive}>
            {render()}
          </Dropdown>
        </Wrapper>
      )}
    </Activatable>
  );
};

import { isFunction } from 'lodash';
import React from 'react';
import { Dropdown, Hoverable, Wrapper } from '@lib/frontend/core/components';
import { DroppableProps } from '@lib/frontend/core/components/Droppable/Droppable.model';
import { useStyles } from '@lib/frontend/core/hooks';

export const Droppable = ({ render, children, ...props }: DroppableProps) => {
  const { styles } = useStyles(props);
  return (
    <Hoverable>
      {(isHovered) => (
        <Wrapper>
          <Dropdown
            style={styles}
            anchor={isFunction(children) ? children(isHovered) : children}
            isOpen={isHovered}>
            {render()}
          </Dropdown>
        </Wrapper>
      )}
    </Hoverable>
  );
};

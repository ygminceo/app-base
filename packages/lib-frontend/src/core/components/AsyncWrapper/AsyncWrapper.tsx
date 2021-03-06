import React from 'react';
import { Loading, Wrapper } from '@lib/frontend/core/components';
import { AsyncWrapperProps } from '@lib/frontend/core/components/AsyncWrapper/AsyncWrapper.model';
import { useStyles } from '@lib/frontend/core/hooks';

export const AsyncWrapper = ({ isLoading, children, ...props }: AsyncWrapperProps) => {
  const { styles } = useStyles(props);
  return (
    <Wrapper style={styles} grow relative>
      {isLoading && (
        <Wrapper absoluteFill above center alignCenter>
          <Loading large primary />
        </Wrapper>
      )}
      <Wrapper {...props} grow>
        {children}
      </Wrapper>
    </Wrapper>
  );
};

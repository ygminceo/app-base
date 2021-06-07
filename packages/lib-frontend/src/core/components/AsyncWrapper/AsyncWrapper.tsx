import { Loading, Wrapper } from '@lib/frontend/core/components';
import { AsyncWrapperProps } from '@lib/frontend/core/components/AsyncWrapper/AsyncWrapper.model';
import { useStyles } from '@lib/frontend/core/hooks';
import React from 'react';

export const AsyncWrapper = ({ isLoading, children, ...props }: AsyncWrapperProps) => {
  const { styles } = useStyles(props);
  return (
    <Wrapper style={styles} grow relative>
      {isLoading && (
        <Wrapper absoluteFill above center alignCenter>
          <Loading large />
        </Wrapper>
      )}
      <Wrapper {...props} grow muted={isLoading}>
        {children}
      </Wrapper>
    </Wrapper>
  );
};

import React from 'react';
import { Rotatable, Wrapper } from '@lib/frontend/core/components';
import { ScratchPadProps } from '@lib/frontend/core/containers/ScratchPad/ScratchPad.model';
import { useStyles } from '@lib/frontend/core/hooks';

export const ScratchPad = ({ ...props }: ScratchPadProps) => {
  const { styles } = useStyles(props);

  return (
    <Wrapper style={styles} grow>
      <Wrapper>
        {/* <Text xlarge>
          Introducing{' '}
          <Text xlarge primary>
            Card X
          </Text>
        </Text> */}

        <Wrapper grow center alignCenter>
          <Rotatable z={10}>{/* <CardElement /> */}</Rotatable>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

import React from 'react';
import { CardElement } from '@lib/frontend/billing/components';
import { Rotatable, Text, Wrapper } from '@lib/frontend/core/components';
import { ScratchPadProps } from '@lib/frontend/core/containers/ScratchPad/ScratchPad.model';
import { useDimension, useStyles } from '@lib/frontend/core/hooks';

export const ScratchPad = ({ ...props }: ScratchPadProps) => {
  const { styles } = useStyles(props);

  return (
    <Wrapper grow style={styles}>
      <Wrapper fullHeight>
        <Text xlarge>
          Introducing{' '}
          <Text xlarge primary>
            Card X
          </Text>
        </Text>

        <Wrapper grow center alignCenter>
          <Rotatable z={10}>
            <CardElement />
          </Rotatable>
        </Wrapper>
      </Wrapper>

      <Wrapper fullWidth height={100}>
        <Text xlarge>
          Footer
        </Text>
      </Wrapper>
    </Wrapper>
  );
};

import { CardElementProps } from '@lib/frontend/billing/components/CardElement/CardElement.model';
import React from 'react';
import { useStyles } from '@lib/frontend/core/hooks';
import { Logo, Wrapper, Image } from '@lib/frontend/core/components';
import { config } from '@lib/common/core/utils/Config/Config';

const PUBLIC_URL = config.get<string>('REACT_APP_PUBLIC_URL', '');

export const CardElement = ({ ...props }: CardElementProps) => {
  const { styles } = useStyles(props, [
    { transform: [
      { rotateZ: '45deg' },
      { rotateY: '0deg' },
    ] },
  ]);
  return (
    <Wrapper style={styles} width={300} height={180} border shadow round p relative fill>
      <Logo small />

      <Wrapper absoluteRight center alignCenter p>
        <Image src={`${PUBLIC_URL}/images/emv.png`} width={25} height={25} />
      </Wrapper>
    </Wrapper>
  );
};

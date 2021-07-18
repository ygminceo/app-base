import React from 'react';
import { config } from '@lib/common/core/utils/Config/Config';
import { CardElementProps } from '@lib/frontend/billing/components/CardElement/CardElement.model';
import { Image, Logo, Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';

const PUBLIC_URL = config.get<string>('REACT_APP_PUBLIC_URL', '');

export const CardElement = ({ ...props }: CardElementProps) => {
  const { styles } = useStyles(props);

  const SIZE = 300;

  return (
    <Wrapper
      style={styles}
      width={SIZE}
      height={(SIZE * 2) / 3}
      shadow
      round
      p
      relative
      backgroundColor="#171717">
      <Logo small contrast />
      <Wrapper absoluteRight center alignCenter p>
        <Image src={`${PUBLIC_URL}/images/emv.png`} width={SIZE / 11} height={SIZE / 11} />
      </Wrapper>
    </Wrapper>
  );
};

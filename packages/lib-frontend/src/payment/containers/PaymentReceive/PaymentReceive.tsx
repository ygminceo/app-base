import { Image, Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import { config } from '@lib/common/core/utils/Config/Config';
import React from 'react';

const PUBLIC_URL = config.get('REACT_APP_PUBLIC_URL', '');

export const PaymentReceive = ({ ...props }) => {
  const { styles } = useStyles(props);
  return (
    <Wrapper style={styles} grow center alignCenter>
      <Image src={`${PUBLIC_URL}/images/qr.png`} width={150} height={150} />
    </Wrapper>
  );
};

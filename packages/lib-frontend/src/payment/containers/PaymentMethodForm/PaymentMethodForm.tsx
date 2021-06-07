import { Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import { BankAccountButton } from '@lib/frontend/payment/containers';
import { PaymentMethodFormProps } from '@lib/frontend/payment/containers/PaymentMethodForm/PaymentMethodForm.model';
import React from 'react';

export const PaymentMethodForm = ({ ...props }: PaymentMethodFormProps) => {
  const { styles } = useStyles(props);
  return (
    <Wrapper style={styles} grow>
      <BankAccountButton />
    </Wrapper>
  );
};

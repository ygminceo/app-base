import { BankAccountButtonProps } from '@lib/frontend/payment/containers/BankAccountButton/BankAccountButton.model';
import { _BankAccountButton } from '@lib/frontend/payment/containers/BankAccountButton/internal/_BankAccountButton';
import React from 'react';

export const BankAccountButton = (props: BankAccountButtonProps) => (
  <_BankAccountButton {...props} />
);

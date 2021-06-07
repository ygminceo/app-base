import { BankAccountAddRequest } from '@lib/common/payment/models';
import { useAccount } from '@lib/frontend/account/stores/account.reducer';
import { Button } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';
import {
  bankAccountAddAction,
  bankTokenLinkCreateAction,
} from '@lib/frontend/payment/actions/payment/payment.action';
import { _BankAccountButtonProps } from '@lib/frontend/payment/containers/BankAccountButton/internal/_BankAccountButton.model';
import { _BankLink } from '@lib/frontend/payment/containers/BankAccountButton/internal/_BankLink';
import { AppDispatchType } from '@lib/frontend/root/stores/store';
import { unwrapResult } from '@reduxjs/toolkit';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

export const _BankAccountButton = ({ ...props }: _BankAccountButtonProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation(['payment']);

  const dispatch = useDispatch<AppDispatchType>();
  const account = useAccount();
  const [token, setToken] = useState<string>('');

  // TODO: cache this until exp
  const handleTokenCreate = useCallback(
    () =>
      account &&
      dispatch(bankTokenLinkCreateAction({ account_id: account._id }))
        .then(unwrapResult)
        .then(({ token }) => setToken(token)),
    [account],
  );

  const handleBankLink = useCallback(
    (data: BankAccountAddRequest) =>
      dispatch(bankAccountAddAction(data))
        .then(unwrapResult)
        .finally(() => setToken('')),
    [],
  );

  return account ? (
    <>
      <Button style={styles} onPress={handleTokenCreate}>
        {t('payment:labels.addBankAccount')}
      </Button>
      {token && <_BankLink token={token} onSuccess={handleBankLink} onError={() => setToken('')} />}
    </>
  ) : null;
};

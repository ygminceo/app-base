import { unwrapResult } from '@reduxjs/toolkit';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BankAccountAddRequestModel } from '@lib/common/billing/models';
import { useAccount } from '@lib/frontend/account/stores/account.reducer';
import {
  bankAccountAddAction,
  bankLinkTokenCreateAction,
} from '@lib/frontend/billing/actions/billing/billing.action';
import { BankAccountButtonProps } from '@lib/frontend/billing/containers/BankAccountButton/BankAccountButton.model';
import { _BankLink } from '@lib/frontend/billing/containers/BankAccountButton/internal/_BankLink';
import { Button } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { AppDispatchModel } from '@lib/frontend/root/stores/store';

export const BankAccountButton = ({ ...props }: BankAccountButtonProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation(['billing']);
  const dispatch = useDispatch<AppDispatchModel>();

  const account = useAccount();
  const [token, setToken] = useState<string>('');

  // TODO: cache this until exp
  const handleTokenCreate = useCallback(
    () =>
      account &&
      dispatch(bankLinkTokenCreateAction({ accountId: account._id }))
        .then(unwrapResult)
        .then(({ token }) => setToken(token)),
    [account],
  );

  const handleBankLink = useCallback(
    (data: BankAccountAddRequestModel) =>
      dispatch(bankAccountAddAction(data))
        .then(unwrapResult)
        .finally(() => setToken('')),
    [],
  );

  return (
    <>
      <Button style={styles} onPress={handleTokenCreate}>
        {t('billing:labels.addBankAccount')}
      </Button>
      {token ? (
        <_BankLink token={token} onSuccess={handleBankLink} onError={() => setToken('')} />
      ) : null}
    </>
  );
};

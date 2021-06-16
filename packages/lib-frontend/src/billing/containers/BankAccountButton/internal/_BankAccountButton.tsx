import { unwrapResult } from '@reduxjs/toolkit';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BankAccountAddRequestModel } from '@lib/common/billing/models';
import { useAccountProtected } from '@lib/frontend/account/hooks';
import {
  bankAccountAddAction,
  bankLinkTokenCreateAction,
} from '@lib/frontend/billing/actions/billing/billing.action';
import { _BankAccountButtonProps } from '@lib/frontend/billing/containers/BankAccountButton/internal/_BankAccountButton.model';
import { _BankLink } from '@lib/frontend/billing/containers/BankAccountButton/internal/_BankLink';
import { Button } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { AppDispatchModel } from '@lib/frontend/root/stores/store';

export const _BankAccountButton = ({ ...props }: _BankAccountButtonProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation(['billing']);

  const dispatch = useDispatch<AppDispatchModel>();
  const account = useAccountProtected();
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
      {token && <_BankLink token={token} onSuccess={handleBankLink} onError={() => setToken('')} />}
    </>
  );
};

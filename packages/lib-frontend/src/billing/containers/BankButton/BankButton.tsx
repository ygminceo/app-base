import { unwrapResult } from '@reduxjs/toolkit';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BankAddRequestModel } from '@lib/common/billing/models';
import {
  bankAddAction,
  bankLinkTokenCreateAction,
} from '@lib/frontend/billing/actions/billing/billing.action';
import { BankButtonProps } from '@lib/frontend/billing/containers/BankButton/BankButton.model';
import { _BankLink } from '@lib/frontend/billing/containers/BankButton/internal/_BankLink';
import { Button } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { AppDispatchModel } from '@lib/frontend/root/stores/store';

export const BankButton = ({ ...props }: BankButtonProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation(['billing']);
  const dispatch = useDispatch<AppDispatchModel>();

  const [token, setToken] = useState<string>('');

  // TODO: cache this until exp
  const handleTokenCreate = useCallback(
    () =>
      dispatch(bankLinkTokenCreateAction())
        .then(unwrapResult)
        .then(({ token }) => setToken(token)),
    [],
  );

  const handleBankLink = useCallback(
    (data: BankAddRequestModel) =>
      dispatch(bankAddAction(data))
        .then(unwrapResult)
        .finally(() => setToken('')),
    [],
  );

  return (
    <>
      <Button style={styles} onPress={handleTokenCreate}>
        {t('billing:labels.addBank')}
      </Button>
      {token ? (
        <_BankLink token={token} onSuccess={handleBankLink} onError={() => setToken('')} />
      ) : null}
    </>
  );
};

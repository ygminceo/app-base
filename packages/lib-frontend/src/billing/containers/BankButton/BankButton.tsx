import { unwrapResult } from '@reduxjs/toolkit';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BANK_LINK_TOKEN_GET, BILLING } from '@lib/common/billing/constants';
import { BankAddRequestModel } from '@lib/common/billing/models';
import { bankAddAction } from '@lib/frontend/billing/actions/bank/bank.action';
import { billingClient } from '@lib/frontend/billing/clients/BillingClient/BillingClient';
import { BankButtonProps } from '@lib/frontend/billing/containers/BankButton/BankButton.model';
import { _BankModal } from '@lib/frontend/billing/containers/BankButton/internal/_BankModal';
import { Button } from '@lib/frontend/core/components';
import { useQuery, useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { AppDispatchModel } from '@lib/frontend/root/stores/store';

export const BankButton = ({ ...props }: BankButtonProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation([BILLING]);
  const dispatch = useDispatch<AppDispatchModel>();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>();

  const { data, query } = useQuery<string>(
    BANK_LINK_TOKEN_GET,
    async () => {
      const { token } = await billingClient.bankLinkTokenGet();
      return token;
    },
    { cache: true },
  );

  const handleBankLink = useCallback(
    (data: BankAddRequestModel) =>
      dispatch(bankAddAction(data))
        .then(unwrapResult)
        .finally(() => setModalIsOpen(false)),
    [],
  );
  return (
    <>
      <Button
        style={styles}
        onPress={() => query().then(() => setModalIsOpen(true))}
        icon="building">
        {t('billing:labels.addBank')}
      </Button>
      {data && (
        <_BankModal
          isOpen={modalIsOpen}
          token={data}
          onSuccess={handleBankLink}
          onClose={() => setModalIsOpen(false)}
        />
      )}
    </>
  );
};

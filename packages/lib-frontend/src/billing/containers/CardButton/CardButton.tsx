import React, { useState } from 'react';
import { BILLING, CARD_TOKEN_GET } from '@lib/common/billing/constants';
import { billingClient } from '@lib/frontend/billing/clients/BillingClient/BillingClient';
import { CardButtonProps } from '@lib/frontend/billing/containers/CardButton/CardButton.model';
import { _CardModal } from '@lib/frontend/billing/containers/CardButton/internal/_CardModal';
import { Button } from '@lib/frontend/core/components';
import { useQuery, useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const CardButton = ({ ...props }: CardButtonProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation([BILLING]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>();

  const { data, query } = useQuery<string>(
    CARD_TOKEN_GET,
    async () => {
      const { token } = await billingClient.cardTokenGet();
      return token;
    },
    { cache: true },
  );

  return (
    <>
      <Button style={styles} onPress={() => query().then(() => setModalIsOpen(true))} icon="card">
        {t('billing:labels.addCard')}
      </Button>
      {data && (
        <_CardModal token={data} isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
      )}
    </>
  );
};

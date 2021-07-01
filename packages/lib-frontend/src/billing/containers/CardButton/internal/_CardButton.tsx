import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { BILLING, CARD_TOKEN_GET } from '@lib/common/billing/constants';
import { config } from '@lib/common/core/utils/Config/Config';
import { billingClient } from '@lib/frontend/billing/clients/BillingClient/BillingClient';
import { _CardButtonProps } from '@lib/frontend/billing/containers/CardButton/internal/_CardButton.model';
import { _CardForm } from '@lib/frontend/billing/containers/CardButton/internal/_CardForm';
import { _StripeCardFormModel } from '@lib/frontend/billing/containers/CardButton/internal/_CardForm.model';
import { Button, Modal } from '@lib/frontend/core/components';
import { useQuery, useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';

const REACT_APP_STRIPE_TOKEN = config.get<string>('REACT_APP_STRIPE_TOKEN', '');

export const _CardButton = ({ ...props }: _CardButtonProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation([BILLING]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>();

  const { data, query } = useQuery<_StripeCardFormModel | null>(CARD_TOKEN_GET, async () => {
    const { id, token } = await billingClient.cardTokenGet();
    const stripe = await loadStripe(REACT_APP_STRIPE_TOKEN);
    if (stripe === null) {
      return null;
    }
    setModalIsOpen(true);
    return { stripe, token };
  });

  return (
    <>
      <Button style={styles} onPress={query} icon="card">
        {t('billing:labels.addCard')}
      </Button>
      {data && (
        <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
          <_CardForm stripe={data} />
        </Modal>
      )}
    </>
  );
};

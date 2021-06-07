import { Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { PaymentMethodForm } from '@lib/frontend/payment/containers';
import { PAYMENT_TABS } from '@lib/frontend/payment/pages/Payment/Payment.constants';
import { PaymentPageProps } from '@lib/frontend/payment/pages/Payment/Payment.model';
import { Tabs } from '@lib/frontend/routing/containers';
import React from 'react';

export const PaymentPage = ({ ...props }: PaymentPageProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation(['payment']);
  return (
    <Wrapper style={styles} grow center>
      <Tabs tabs={PAYMENT_TABS.map((tab) => ({ ...tab, title: t(tab.title) }))} />
      <PaymentMethodForm />
    </Wrapper>
  );
};

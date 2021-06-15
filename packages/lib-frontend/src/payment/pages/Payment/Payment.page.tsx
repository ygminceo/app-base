import { PAYMENT_METHODS_GET } from '@lib/common/payment/constants';
import { useAccountProtected } from '@lib/frontend/account/hooks';
import { useAccount } from '@lib/frontend/account/stores/account.reducer';
import { AppLayout } from '@lib/frontend/app/layouts';
import { Wrapper } from '@lib/frontend/core/components';
import { useQuery } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { paymentClient } from '@lib/frontend/payment/clients/PaymentClient/PaymentClient';
import { CardForm } from '@lib/frontend/payment/containers/CardForm/CardForm';
import { PaymentPageProps } from '@lib/frontend/payment/pages/Payment/Payment.model';
import React from 'react';

export const PaymentPage = ({ ...props }: PaymentPageProps) => {
  const { t } = useTranslation(['payment']);
  const account = useAccountProtected();

  const { isLoading, data } = useQuery(
    PAYMENT_METHODS_GET,
    () => paymentClient.paymentMethodsGet({ accountId: account._id }),
    true,
  );
  console.warn(isLoading);
  console.warn(data);

  return (
    <AppLayout>
      <Wrapper grow spacing p>
        {/* <AsyncWrapper isLoading={isLoading}> */}
        <CardForm />
        {/* </AsyncWrapper> */}
      </Wrapper>
    </AppLayout>
  );
};

import React from 'react';
import { AppLayout } from '@lib/frontend/app/layouts';
import { BankAccountButton } from '@lib/frontend/billing/containers';
import { BillingPageProps } from '@lib/frontend/billing/pages/Billing/Billing.model';
import { Wrapper } from '@lib/frontend/core/components';

export const BillingPage = ({ ...props }: BillingPageProps) => (
  <AppLayout>
    <Wrapper grow spacing p>
      <BankAccountButton />
    </Wrapper>
  </AppLayout>
);

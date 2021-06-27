import React from 'react';
import { BankButton, CardButton } from '@lib/frontend/billing/containers';
import { BillingPageProps } from '@lib/frontend/billing/pages/Billing/Billing.model';
import { Wrapper } from '@lib/frontend/core/components';

export const BillingPage = ({ ...props }: BillingPageProps) => (
  <Wrapper grow spacing p>
    <BankButton />
    <CardButton />
  </Wrapper>
);

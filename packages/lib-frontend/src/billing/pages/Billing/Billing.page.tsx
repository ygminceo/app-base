import React from 'react';
import { BankAccountButton } from '@lib/frontend/billing/containers';
import { BillingPageProps } from '@lib/frontend/billing/pages/Billing/Billing.model';
import { Wrapper } from '@lib/frontend/core/components';

export const BillingPage = ({ ...props }: BillingPageProps) => (
  <Wrapper grow spacing p>
    <BankAccountButton />
  </Wrapper>
);

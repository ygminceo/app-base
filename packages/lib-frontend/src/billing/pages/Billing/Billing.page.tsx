import React from 'react';
import { BankButton, CardButton } from '@lib/frontend/billing/containers';
import { BillingPageProps } from '@lib/frontend/billing/pages/Billing/Billing.model';
import { Wrapper, Text } from '@lib/frontend/core/components';

export const BillingPage = ({ ...props }: BillingPageProps) => (
  <Wrapper grow spacing p>
    <Wrapper p border round spacing>
      <Text subtitle>Payment Methods</Text>
      <Wrapper row spacingTight>
        <BankButton />
        <CardButton />
      </Wrapper>
    </Wrapper>
  </Wrapper>
);

import React from 'react';
import { BankButton, CardButton } from '@lib/frontend/billing/containers';
import { BillingPageProps } from '@lib/frontend/billing/pages/Billing/Billing.model';
import { Text, Wrapper, Expandable } from '@lib/frontend/core/components';

export const BillingPage = ({ ...props }: BillingPageProps) => (
  <Wrapper grow spacing p>
    <Text subtitle>Payment Methods</Text>
    <Wrapper row spacingTight>
      <CardButton />
      <BankButton />
    </Wrapper>

    <Expandable title="hello">
      <Text>expanded</Text>
    </Expandable>
    <Expandable title="hello">
      <Text>expanded</Text>
    </Expandable>
    <Expandable title="hello">
      <Text>expanded</Text>
    </Expandable>
  </Wrapper>
);

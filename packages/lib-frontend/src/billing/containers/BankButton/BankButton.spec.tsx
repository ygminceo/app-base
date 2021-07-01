import React from 'react';
import { render, screen } from '@lib/frontend/testing/utils/testUtils/testUtils';
import { BankButton } from './BankButton';

it('Renders', () => {
  render(<BankButton />);

  // TODO: commonalize?
  const t = screen.queryByText(/^([a-zA-Z0-9]+:)?[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/i);
  expect(t).toBeNull();

  const tt = screen.queryByText('Add bank account');
  expect(tt).toBeTruthy();
});
 
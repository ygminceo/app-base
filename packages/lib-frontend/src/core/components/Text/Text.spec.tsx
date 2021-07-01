import React from 'react';
import { render, screen } from '@lib/frontend/testing/utils/testUtils/testUtils';
import { Text } from './Text';

const TEST_STRING = 'test string';

it('Renders', () => {
  render(<Text>{TEST_STRING}</Text>);
  const element = screen.queryByText(TEST_STRING);
  expect(element).toBeTruthy();
});

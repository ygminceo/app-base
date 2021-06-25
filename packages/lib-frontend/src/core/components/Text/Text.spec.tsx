import React from 'react';
import { render } from '@lib/frontend/testing/utils/testUtils/testUtils';
import { Text } from './Text';

const TEST_STRING = 'test string';

it('Renders', () => {
  render(<Text>{TEST_STRING}</Text>);
});

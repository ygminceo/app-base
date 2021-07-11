import React from 'react';
import { config } from '@lib/common/core/utils/Config/Config';
import { Text } from '@lib/frontend/core/components';
import { CopyrightProps } from '@lib/frontend/core/components/Copyright/Copyright.model';

const REACT_APP_APP_NAME = config.get<string>('REACT_APP_APP_NAME', '');

export const Copyright = ({ ...props }: CopyrightProps) => (
  <Text {...props} contrast>
    {`${'\u00A9'} ${REACT_APP_APP_NAME}`}
  </Text>
);

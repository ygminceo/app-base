import React from 'react';
import { config } from '@lib/common/core/utils/Config/Config';
import { Text } from '@lib/frontend/core/components';
import { CopyrightProps } from '@lib/frontend/core/components/Copyright/Copyright.model';
import moment from 'moment';

const REACT_APP_APP_NAME = config.get<string>('REACT_APP_APP_NAME', '');

// TODO: get from locale
const CURRENT_YEAR = moment().year();

export const Copyright = ({ ...props }: CopyrightProps) => {
  return (
    <Text {...props}>
      {`${'\u00A9'} ${REACT_APP_APP_NAME}`}
    </Text>
  );
};

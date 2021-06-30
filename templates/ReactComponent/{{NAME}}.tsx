import { {{NAME}}Props } from '@lib/frontend/{{SERVICE}}(camelCase)/{{PATH}}(pathCase)/{{NAME}}/{{NAME}}.model';
import React from 'react';
import { useStyles } from '@lib/frontend/core/hooks';

export const {{NAME}} = ({ ...props }: {{NAME}}Props) => {
  const { styles } = useStyles(props);
  return (
  );
};

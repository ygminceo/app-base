import React from 'react';
import { SearchFieldProps } from '@lib/frontend/core/components/SearchField/SearchField.model';
import { TextField } from '@lib/frontend/core/components/TextField/TextField';
import { useStyles, useUncontrolled } from '@lib/frontend/core/hooks';

export const SearchField = ({
  value,
  onChange,
  isDisabled,
  autoFocus,
  ...props
}: SearchFieldProps) => {
  const { styles } = useStyles(props);
  const [fieldValue, setFieldValue] = useUncontrolled<string>(value, onChange, '');
  return (
    <TextField
      style={styles}
      value={fieldValue}
      onChange={setFieldValue}
      isDisabled={isDisabled}
      autoFocus={autoFocus}
    />
  );
};

import React from 'react';
import { _SwitchField } from '@lib/frontend/core/components/SwitchField/internal/_SwitchField';
import { _SwitchFieldProps } from '@lib/frontend/core/components/SwitchField/internal/_SwitchField.model';
import { useUncontrolled } from '@lib/frontend/core/hooks';

export const SwitchField = ({ value, onChange, ...props }: _SwitchFieldProps) => {
  const [fieldValue, setFieldValue] = useUncontrolled<boolean>(value, onChange, false);
  return <_SwitchField {...props} value={fieldValue} onChange={setFieldValue} />;
};

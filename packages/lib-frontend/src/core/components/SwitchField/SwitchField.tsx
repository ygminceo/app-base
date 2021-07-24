import React from 'react';
import { ANALYTICS_ACTION_CHANGE } from '@lib/common/analytics/constants';
import { useAnalytics } from '@lib/frontend/analytics/hooks';
import { SwitchFieldProps } from '@lib/frontend/core/components/SwitchField/SwitchField.model';
import { _SwitchField } from '@lib/frontend/core/components/SwitchField/internal/_SwitchField';
import { useUncontrolled } from '@lib/frontend/core/hooks';

export const SwitchField = ({ value, onChange, trackable, ...props }: SwitchFieldProps) => {
  const analytics = useAnalytics();
  const [fieldValue, setFieldValue] = useUncontrolled<boolean>(value, onChange, false);
  return (
    <_SwitchField
      {...props}
      value={fieldValue}
      onChange={(value) => {
        trackable &&
          analytics.track({ ...trackable, action: ANALYTICS_ACTION_CHANGE, params: { value } });
        setFieldValue(value);
      }}
    />
  );
};

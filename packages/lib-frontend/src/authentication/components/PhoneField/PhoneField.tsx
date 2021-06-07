import { COUNTRY_CODES } from '@lib/frontend/authentication/components/PhoneField/PhoneField.constants';
import {
  PhoneFieldProps,
  PhoneFieldValue,
} from '@lib/frontend/authentication/components/PhoneField/PhoneField.model';
import { SelectField, TextField, Wrapper } from '@lib/frontend/core/components';
import { SelectableOption } from '@lib/frontend/core/components/SelectField/SelectField.model';
import { useStyles, useUncontrolled } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';
import React, { useEffect } from 'react';

export const PhoneField = ({
  autoFocus,
  error,
  onChange,
  value,
  isDisabled,
  ...props
}: PhoneFieldProps) => {
  const { t } = useTranslation(['common']);
  const { styles } = useStyles(props);

  const [fieldValue, setFieldValue] = useUncontrolled<PhoneFieldValue>(value, onChange, {
    countryCode: '',
    phoneNumber: '',
  });

  //TODO: get from locale
  useEffect(() => {
    if (!value?.countryCode) {
      setFieldValue({ phoneNumber: value?.phoneNumber || '', countryCode: '1' });
    }
  }, [value]);

  return (
    <Wrapper style={styles} spacingTight>
      <SelectField<string>
        searchable
        label={t('common:labels.countryCode')}
        options={COUNTRY_CODES}
        onChange={(value: string) => setFieldValue({ ...fieldValue, countryCode: value })}
        value={fieldValue.countryCode}
        defaultValue={fieldValue.countryCode}
        renderOption={(option: SelectableOption) => `+${option.value} ${option.label}`}
        renderValue={(option: SelectableOption) => `+${option.value} ${option.label}`}
      />
      <TextField
        type="number"
        autoFocus={autoFocus}
        error={error}
        autoComplete="phone"
        label={t('common:labels.phoneNumber')}
        value={fieldValue.phoneNumber}
        onChange={(value: string) => setFieldValue({ ...fieldValue, phoneNumber: value })}
      />
    </Wrapper>
  );
};

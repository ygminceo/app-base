import { FieldProps } from '@lib/frontend/core/components/Field/Field.model';

export interface PhoneFieldValue {
  countryCode: string;
  phoneNumber: string;
}

export interface PhoneFieldProps extends Omit<FieldProps<PhoneFieldValue>, 'defaultValue'> {}

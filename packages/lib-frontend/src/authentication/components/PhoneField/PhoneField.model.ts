import { FieldProps } from '@lib/frontend/core/components/Field/Field.model';

export interface PhoneFieldModel {
  countryCode: string;
  phoneNumber: string;
}

export interface PhoneFieldProps extends Omit<FieldProps<PhoneFieldModel>, 'defaultValue'> {}

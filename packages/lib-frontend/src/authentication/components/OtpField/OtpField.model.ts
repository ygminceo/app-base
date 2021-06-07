import { FieldProps } from '@lib/frontend/core/components/Field/Field.model';

export interface OtpFieldProps
  extends Pick<FieldProps<string>, 'value' | 'onChange' | 'error' | 'isDisabled' | 'autoFocus'> {}

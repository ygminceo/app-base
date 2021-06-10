import { FieldProps } from '@lib/frontend/core/components/Field/Field.model';

export interface SearchFieldProps
  extends Pick<FieldProps<string>, 'value' | 'onChange' | 'isDisabled' | 'autoFocus'> {}

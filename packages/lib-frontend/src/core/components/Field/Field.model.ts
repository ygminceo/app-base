export interface FieldValueProps<T> {
  defaultValue: T;
  onChange?(value: T): any;
  value?: T;
}

export interface FieldProps<T> extends FieldValueProps<T> {
  defaultValue: T;
  onChange?(value: T): any;
  value?: T;
  autoComplete?: string;
  autoFocus?: boolean | number;
  isDisabled?: boolean;
  error?: string | boolean;
  label?: string;
}

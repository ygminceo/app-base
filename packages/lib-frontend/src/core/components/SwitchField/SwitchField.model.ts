import { FieldProps } from '@lib/frontend/core/components/Field/Field.model';

export interface SwitchFieldProps extends Pick<FieldProps<boolean>, 'isDisabled' | 'trackable'> {
  value?: boolean;
  onChange?(value: boolean): any;
  activeIcon?: string;
  inactiveIncon?: string;
}

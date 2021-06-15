import { FieldProps } from '@lib/frontend/core/components/Field/Field.model';
import { StyledProps } from '@lib/frontend/core/styles/style.model';
import { ReactNode } from 'react';

export type InputModel = 'text' | 'number' | 'tel' | 'email' | 'password' | 'search';

export interface TextFieldProps extends StyledProps, Omit<FieldProps<string>, 'defaultValue'> {
  center?: boolean;
  left?: ReactNode;
  maxLength?: number;
  noClear?: boolean;
  placeholder?: string;
  right?: ReactNode;
  transparent?: boolean;
  type?: InputModel;
  onFocus?(): any;
  onBlur?(): any;
  onSubmit?(): any;
  onDelete?(): any;
  onEscape?(): any;
}

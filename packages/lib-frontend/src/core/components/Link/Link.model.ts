import { TextProps } from '@lib/frontend/core/components/Text/Text.model';

export interface LinkProps extends Omit<TextProps, 'children'> {
  children: string;
  to?: string;
  newTab?: boolean;
  onPress?(): any;
}

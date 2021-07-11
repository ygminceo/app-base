import { TextProps } from '@lib/frontend/core/components/Text/Text.model';

export interface LinkProps extends TextProps {
  to?: string;
  newTab?: boolean;
  onPress?(): any;
}

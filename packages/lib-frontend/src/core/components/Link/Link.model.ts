import { PropsWithChildren } from 'react';
import { TextProps } from '@lib/frontend/core/components/Text/Text.model';

export interface LinkProps
  extends Omit<TextProps, 'children'>,
    PropsWithChildren<{
      to?: string;
      newTab?: boolean;
      onPress?(): any;
    }> {}

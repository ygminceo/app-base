import { TextProps } from '@lib/frontend/core/components/Text/Text.model';
import { PropsWithChildren } from 'react';

export interface LinkProps
  extends Omit<TextProps, 'children'>,
    PropsWithChildren<{
      to?: string;
      newTab?: boolean;
      onPress?(): any;
    }> {}

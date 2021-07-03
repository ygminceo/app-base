import { PropsWithChildren } from 'react';
import { TextProps } from '@lib/frontend/core/components/Text/Text.model';

export interface RouteLinkProps<P>
  extends Omit<TextProps, 'children'>,
    PropsWithChildren<{
      to: string;
      replace?: boolean;
      params?: P;
    }> {}

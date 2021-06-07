import { TextProps } from '@lib/frontend/core/components/Text/Text.model';
import { PropsWithChildren } from 'react';

export interface RouteLinkProps
  extends Omit<TextProps, 'children'>,
    PropsWithChildren<{
      to: string;
      replace?: boolean;
    }> {}

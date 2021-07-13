import { AnchorHTMLAttributes, MouseEvent } from 'react';
import { _LinkProps } from '@lib/frontend/core/components/Link/internal/_Link.model';
import compose from '@lib/frontend/core/utils/compose/compose';

export const _Link = compose<_LinkProps, AnchorHTMLAttributes<HTMLAnchorElement>>({
  component: 'a',
  isWeb: true,
  getProps: ({ children, newTab, to, onPress }) => ({
    children,
    href: to,
    target: newTab ? '_blank' : undefined,
    onClick: (e: MouseEvent<HTMLAnchorElement>) => {
      if (onPress) {
        e.preventDefault();
        onPress();
      }
    },
  }),
});

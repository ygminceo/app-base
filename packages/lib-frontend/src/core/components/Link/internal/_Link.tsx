import { _LinkProps } from '@lib/frontend/core/components/Link/internal/_Link.model';
import compose from '@lib/frontend/core/utils/compose/compose';
import { AnchorHTMLAttributes, MouseEvent } from 'react';

export const _Link = compose<_LinkProps, AnchorHTMLAttributes<HTMLAnchorElement>>({
  component: 'a',
  isWeb: true,
  getProps: ({ children, newTab, pathname, onPress }) => ({
    children,
    href: pathname,
    target: newTab ? '_blank' : undefined,
    onClick: (e: MouseEvent<HTMLAnchorElement>) => {
      if (onPress) {
        e.preventDefault();
        onPress();
      }
    },
  }),
});

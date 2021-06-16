import { LinkHTMLAttributes, MouseEvent } from 'react';
import { _LinkProps } from '@lib/frontend/core/components/Link/internal/_Link.model';
import compose from '@lib/frontend/core/utils/compose/compose';

export const _Link = compose<_LinkProps, LinkHTMLAttributes<HTMLLinkElement>>({
  component: 'a',
  isWeb: true,
  getProps: ({ to, newTab, onPress, children }) => ({
    children,
    href: to,
    onClick: (e: MouseEvent<HTMLLinkElement>) => {
      to || e.preventDefault();
      onPress && onPress();
    },
    target: newTab ? '_blank' : undefined,
  }),
});

import { trim } from 'lodash';
import { default as NextLink } from 'next/link';
import React from 'react';
import { _LinkProps } from '@lib/frontend/core/components/Link/internal/_Link.model';
import { useLocale } from '@lib/frontend/locale/hooks';

const { _Link: _LinkWeb } = require('@lib/frontend/core/components/Link/internal/_Link.tsx');

export const _Link = ({ pathname, children, ...props }: _LinkProps) => {
  const { locale } = useLocale();

  if (pathname && pathname.startsWith('/')) {
    return (
      <NextLink href={`/${locale}/${trim(pathname, '/')}`} locale={false}>
        <a>{children}</a>
      </NextLink>
    );
  }
  return (
    <_LinkWeb {...props} pathname={pathname}>
      {children}
    </_LinkWeb>
  );
};

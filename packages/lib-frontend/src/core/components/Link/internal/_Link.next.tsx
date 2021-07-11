import { get, trim } from 'lodash';
import { useRouter } from 'next/router';
import React from 'react';
import { _LinkProps } from '@lib/frontend/core/components/Link/internal/_Link.model';
import i18nConfig from '@lib/frontend/locale/i18n/i18n.config';

const { _Link: _LinkWeb } = require('@lib/frontend/core/components/Link/internal/_Link.tsx');

export const _Link = ({ to, ...props }: _LinkProps) => {
  const router = useRouter();
  const currentLocale = get(router, ['location', 'params', 'locale'], i18nConfig.fallbackLng);
  return (
    <_LinkWeb
      {...props}
      to={to && to.startsWith('/') ? `/${currentLocale}/${trim(to, '/')}` : to}
    />
  );
};

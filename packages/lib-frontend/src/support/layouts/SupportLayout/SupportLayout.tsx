import React from 'react';
import { Wrapper, Text } from '@lib/frontend/core/components';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { SupportLayoutProps } from '@lib/frontend/support/layouts/SupportLayout/SupportLayout.model';

export const SupportLayout = ({ ...props }: SupportLayoutProps) => {
  const { t } = useTranslation(['support']);
  return <Wrapper grow></Wrapper>;
};

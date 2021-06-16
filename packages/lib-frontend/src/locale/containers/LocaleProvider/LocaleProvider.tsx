import React from 'react';
import { LocaleProviderProps } from '@lib/frontend/locale/containers/LocaleProvider/LocaleProvider.model';
import '@lib/frontend/locale/containers/LocaleProvider/internal/_initialize';

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  return <>{children}</>;
};

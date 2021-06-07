import '@lib/frontend/locale/containers/LocaleProvider/internal/_initialize';
import { LocaleProviderProps } from '@lib/frontend/locale/containers/LocaleProvider/LocaleProvider.model';
import React from 'react';

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  return <>{children}</>;
};

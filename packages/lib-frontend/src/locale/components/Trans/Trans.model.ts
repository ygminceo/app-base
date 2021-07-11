import { ReactNode } from 'react';

export interface TransProps {
  ns: string;
  i18nKey: string;
  values?: object;
  components: ReactNode[];
}

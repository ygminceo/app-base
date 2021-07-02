import { PropsWithChildren } from 'react';

export interface ExpandableProps extends PropsWithChildren<{}> {
  isOpen?: boolean;
  title: string;
}

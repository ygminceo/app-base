import { PropsWithChildren } from 'react';

export interface RotatableProps extends PropsWithChildren<{}> {
  x?: number;
  y?: number;
  z?: number;
}

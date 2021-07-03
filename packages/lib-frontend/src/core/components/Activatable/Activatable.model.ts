import { ReactElement } from 'react';

export interface ActivatableProps {
  children: (isActive: boolean) => ReactElement;
  hoverable?: boolean;
  pressable?: boolean;
}

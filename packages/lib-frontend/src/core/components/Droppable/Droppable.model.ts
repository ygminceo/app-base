import { ReactNode } from 'react';

export interface DroppableProps {
  children: ReactNode | ((isActive: boolean) => ReactNode);
  render(): ReactNode;
}

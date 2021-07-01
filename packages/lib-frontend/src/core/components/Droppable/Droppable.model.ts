import { ReactNode } from 'react';

export interface DroppableProps {
  children: ReactNode | ((isHovered: boolean) => ReactNode);
  render(): ReactNode;
}

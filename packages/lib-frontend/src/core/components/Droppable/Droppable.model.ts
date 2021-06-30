import { ReactNode } from 'react';

export interface DroppableProps {
  children: (isHovered: boolean) => ReactNode;
  render(): ReactNode;
}

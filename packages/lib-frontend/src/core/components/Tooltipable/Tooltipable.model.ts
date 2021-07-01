import { DroppableProps } from '@lib/frontend/core/components/Droppable/Droppable.model';

export interface TooltipableProps extends Pick<DroppableProps, 'children'> {
  tooltip: string;
}

import { StyledPropsWithChildren } from '@lib/frontend/core/styles/style.model';

export interface SlidableProps extends StyledPropsWithChildren<{}> {
  current: number;
  previous: number;
}

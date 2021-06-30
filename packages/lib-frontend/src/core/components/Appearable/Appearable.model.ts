import { StyledPropsWithChildren } from '@lib/frontend/core/styles/style.model';

export interface AppearableProps extends StyledPropsWithChildren<{}> {
  isVisible?: boolean;
  dimension?: 'width' | 'height';
}

import { StyledPropsWithChildren } from '@lib/frontend/core/styles/style.model';

export interface AppearableProps extends StyledPropsWithChildren<{}> {
  render?: boolean;
  isVisible?: boolean;
  dimension?: 'width' | 'height';
}

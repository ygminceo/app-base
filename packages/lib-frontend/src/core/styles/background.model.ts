import { ColorProps } from '@lib/frontend/core/styles/color.model';

export interface BackgroundProps extends ColorProps {
  backgroundColor?: string;
  fill?: boolean;
  transparent?: boolean;
}

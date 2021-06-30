import { ColorProps } from '@lib/frontend/core/styles/color.model';

export interface AlertModel extends ColorProps {
  id: string;
  title?: string;
  icon?: string;
  duration?: number;
  message: string;
}

export interface AlertProps extends AlertModel {}

import { ThemeColorProps } from '@lib/frontend/core/styles/color.model';

export interface AlertModel extends ThemeColorProps {
  id: string;
  title?: string;
  icon?: string;
  duration?: number;
  message: string;
}

export interface AlertMessageModel extends Omit<AlertModel, 'id'> {}

export interface AlertProps extends AlertModel {}

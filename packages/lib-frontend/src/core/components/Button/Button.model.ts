import { PressableProps } from '@lib/frontend/core/components/Pressable/Pressable.model';
import { BackgroundProps } from '@lib/frontend/core/styles/background.model';

export interface ButtonProps extends BackgroundProps, Omit<PressableProps, 'from' | 'to'> {
  children: string;
  icon?: string;
  isLoading?: boolean;
  small?: boolean;
  fullWidth?: boolean;
  next?: boolean;
}

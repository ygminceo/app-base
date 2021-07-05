import { PressableProps } from '@lib/frontend/core/components/Pressable/Pressable.model';
import { BackgroundProps } from '@lib/frontend/core/styles/background.model';
import { SizeProps } from '@lib/frontend/core/styles/size.model';

export interface ButtonProps
  extends BackgroundProps,
    Omit<PressableProps, 'from' | 'to'>,
    Pick<SizeProps, 'small' | 'large'> {
  children: string;
  icon?: string;
  isLoading?: boolean;
  fullWidth?: boolean;
  next?: boolean;
}

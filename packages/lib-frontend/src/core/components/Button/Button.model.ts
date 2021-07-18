import { PropsWithChildren } from 'react';
import { PressableProps } from '@lib/frontend/core/components/Pressable/Pressable.model';
import { BackgroundProps } from '@lib/frontend/core/styles/background.model';
import { SizeProps } from '@lib/frontend/core/styles/size.model';

export interface ButtonProps
  extends BackgroundProps,
    Omit<PressableProps, 'from' | 'to' | 'children'>,
    Pick<SizeProps, 'small' | 'large'>,
    PropsWithChildren<{}> {
  icon?: string;
  isLoading?: boolean;
  fullWidth?: boolean;
}

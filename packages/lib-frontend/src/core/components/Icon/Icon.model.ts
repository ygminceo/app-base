import { PressableProps } from '@lib/frontend/core/components/Pressable/Pressable.model';
import { TextProps } from '@lib/frontend/core/components/Text/Text.model';

export interface IconProps
  extends Omit<TextProps, 'children'>,
    Pick<PressableProps, 'onPress' | 'isDisabled' | 'isPressed'> {
  icon: string;
}

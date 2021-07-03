import { AnimatableModel } from '@lib/frontend/core/components/Animatable/Animatable.model';
import { PressableProps } from '@lib/frontend/core/components/Pressable/Pressable.model';
import { TextProps } from '@lib/frontend/core/components/Text/Text.model';

export interface IconProps
  extends Omit<TextProps, 'children'>,
    Pick<PressableProps, 'onPress' | 'isDisabled' | 'isPressed'>,
    AnimatableModel {
  icon: string;
}

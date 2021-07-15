import { ReactNode } from 'react';
import { AnimatableModel } from '@lib/frontend/core/components/Animatable/Animatable.model';
import { StyledTextProps } from '@lib/frontend/core/hooks/useTextStyles/useTextStyles.model';

export interface TextProps extends StyledTextProps {
  children?: string | ReactNode;
  animatable?: AnimatableModel;
  onPress?(): any;
}

import { AnimatableProps } from '@lib/frontend/core/components/Animatable/Animatable.model';
import { HoverableChildProps } from '@lib/frontend/core/components/Hoverable/Hoverable.model';
import { StyledViewProps } from '@lib/frontend/core/hooks/useViewStyles/useViewStyles.model';
import { StyledPropsWithChildren } from '@lib/frontend/core/styles/style.model';

export interface MeasureModel {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ScrollModel {
  x: number;
  y: number;
}

export interface WrapperProps
  extends StyledViewProps,
    HoverableChildProps,
    StyledPropsWithChildren<{
      nativeID?: string;
      spacing?: boolean | number;
      spacingTight?: boolean;
      onPress?(): any;
      onLayout?(): any;
      onMeasure?(measure: MeasureModel): any;
      horizontalScrollable?: boolean;
      verticalScrollable?: boolean;
      onScroll?(scroll: ScrollModel): any;
      animatable?: AnimatableProps;
      safe?: boolean;
    }> {}

export interface WrapperChildProps extends Pick<WrapperProps, 'row' | 'spacing' | 'spacingTight'> {}

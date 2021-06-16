import { BackgroundProps } from '@lib/frontend/core/styles/background.model';
import { BorderProps } from '@lib/frontend/core/styles/border.model';
import { FlexProps } from '@lib/frontend/core/styles/flex.model';
import { ShapeProps } from '@lib/frontend/core/styles/shape.model';
import { SpacingProps } from '@lib/frontend/core/styles/spacing.model';
import { StyledProps } from '@lib/frontend/core/styles/style.model';

export interface StyledViewProps
  extends FlexProps,
    ShapeProps,
    SpacingProps,
    BackgroundProps,
    BorderProps,
    StyledProps {}

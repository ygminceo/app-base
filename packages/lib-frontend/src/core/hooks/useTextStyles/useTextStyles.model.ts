import { ColorProps } from '@lib/frontend/core/styles/color.model';
import { FontProps } from '@lib/frontend/core/styles/font.model';
import { ShapeProps } from '@lib/frontend/core/styles/shape.model';
import { SizeProps } from '@lib/frontend/core/styles/size.model';
import { SpacingProps } from '@lib/frontend/core/styles/spacing.model';
import { StyledProps } from '@lib/frontend/core/styles/style.model';

export interface StyledTextProps
  extends ColorProps,
    FontProps,
    ShapeProps,
    SizeProps,
    SpacingProps,
    StyledProps {}

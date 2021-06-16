import { useStyles } from '@lib/frontend/core/hooks';
import {
  UseStylesParamsModel,
  UseStylesReturnsModel,
} from '@lib/frontend/core/hooks/useStyles/useStyles.model';
import { StyledTextProps } from '@lib/frontend/core/hooks/useTextStyles/useTextStyles.model';
import { getColorStyle } from '@lib/frontend/core/styles/color.style';
import { getFontStyle } from '@lib/frontend/core/styles/font.style';
import { getShapeStyle } from '@lib/frontend/core/styles/shape.style';
import { getSizeStyle } from '@lib/frontend/core/styles/size.style';
import { getSpacingStyle } from '@lib/frontend/core/styles/spacing.style';

export const useTextStyles = <P extends StyledTextProps>(
  ...[props, deps]: UseStylesParamsModel<P>
): UseStylesReturnsModel<P> => {
  return useStyles<P>(props, [
    getColorStyle,
    getShapeStyle,
    getSizeStyle,
    getFontStyle,
    getSpacingStyle,
    ...(deps || []),
  ]);
};

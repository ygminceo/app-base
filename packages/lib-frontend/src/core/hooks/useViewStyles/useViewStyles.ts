import { useStyles } from '@lib/frontend/core/hooks';
import {
  UseStylesParamsModel,
  UseStylesReturnsModel,
} from '@lib/frontend/core/hooks/useStyles/useStyles.model';
import { StyledViewProps } from '@lib/frontend/core/hooks/useViewStyles/useViewStyles.model';
import { getBackgroundStyle } from '@lib/frontend/core/styles/background.style';
import { getBorderStyle } from '@lib/frontend/core/styles/border.style';
import { getFlexStyle } from '@lib/frontend/core/styles/flex.style';
import { getShapeStyle } from '@lib/frontend/core/styles/shape.style';
import { getSpacingStyle } from '@lib/frontend/core/styles/spacing.style';

export const useViewStyles = <P extends StyledViewProps>(
  ...[props, deps]: UseStylesParamsModel<P>
): UseStylesReturnsModel<P> => {
  return useStyles<P>(props, [
    getBackgroundStyle,
    getBorderStyle,
    getFlexStyle,
    getShapeStyle,
    getSpacingStyle,
    ...deps || [],
  ]);
};

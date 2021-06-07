import { useStyles } from '@lib/frontend/core/hooks';
import {
  UseStylesProps,
  UseStylesReturns,
} from '@lib/frontend/core/hooks/useStyles/useStyles.model';
import { StyledViewProps } from '@lib/frontend/core/hooks/useViewStyles/useViewStyles.model';
import { getBackgroundStyle } from '@lib/frontend/core/styles/background.style';
import { getBorderStyle } from '@lib/frontend/core/styles/border.style';
import { getFlexStyle } from '@lib/frontend/core/styles/flex.style';
import { getShapeStyle } from '@lib/frontend/core/styles/shape.style';
import { getSpacingStyle } from '@lib/frontend/core/styles/spacing.style';

export const useViewStyles = <P extends StyledViewProps>(
  ...[props, deps]: UseStylesProps<P>
): UseStylesReturns<P> => {
  return useStyles<P>(props, [
    getBackgroundStyle,
    getBorderStyle,
    getFlexStyle,
    getShapeStyle,
    getSpacingStyle,
    ...deps || [],
  ]);
};

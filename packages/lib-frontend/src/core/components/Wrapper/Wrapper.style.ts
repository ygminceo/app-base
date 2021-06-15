import { WrapperChildProps } from '@lib/frontend/core/components/Wrapper/Wrapper.model';
import { spacingStyle } from '@lib/frontend/core/styles/spacing.style';
import { NativeStyleModel } from '@lib/frontend/core/styles/style.model';
import { isNumber } from 'lodash';

export const getWrapperChildStyle = ({
  row,
  spacing,
  spacingTight,
}: WrapperChildProps): NativeStyleModel => {
  if (row) {
    return isNumber(spacing)
      ? { marginLeft: spacing }
      : spacing
      ? [spacingStyle.marginLeft]
      : spacingTight
      ? [spacingStyle.marginLeftTight]
      : [];
  }
  return isNumber(spacing)
    ? { marginTop: spacing }
    : spacing
    ? [spacingStyle.marginTop]
    : spacingTight
    ? [spacingStyle.marginTopTight]
    : [];
};

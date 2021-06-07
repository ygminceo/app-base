import { WrapperChildProps } from '@lib/frontend/core/components/Wrapper/Wrapper.model';
import { spacingStyle } from '@lib/frontend/core/styles/spacing.style';
import { NativeStyle } from '@lib/frontend/core/styles/style.model';

export const getWrapperChildStyle = ({
  row,
  spacing,
  spacingTight,
}: WrapperChildProps): NativeStyle => {
  if (row) {
    return spacing ? [spacingStyle.marginLeft] : spacingTight ? [spacingStyle.marginLeftTight] : [];
  }
  return spacing ? [spacingStyle.marginTop] : spacingTight ? [spacingStyle.marginTopTight] : [];
};

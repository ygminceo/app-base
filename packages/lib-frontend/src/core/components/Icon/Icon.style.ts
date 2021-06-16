import { StyleSheet } from 'react-native';
import { IconProps } from '@lib/frontend/core/components/Icon/Icon.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const PRESSABLE_ICON_SIZE_SMALL = 32;
export const PRESSABLE_ICON_SIZE_LARGE = 40;

export const iconStyle = StyleSheet.create({
  default: {
    width: PRESSABLE_ICON_SIZE_SMALL,
    height: PRESSABLE_ICON_SIZE_SMALL,
  },
  large: {
    width: PRESSABLE_ICON_SIZE_LARGE,
    height: PRESSABLE_ICON_SIZE_LARGE,
  },
});

export const getIconStyle: StyleGetterModel<IconProps> = ({ onPress, large, xlarge }) =>
  onPress ? [large || xlarge ? iconStyle.large : iconStyle.default] : [];

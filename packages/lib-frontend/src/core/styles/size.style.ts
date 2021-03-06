import { StyleSheet } from 'react-native';
import { SizeProps } from '@lib/frontend/core/styles/size.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const FONT_SIZE_SMALL = 12;
export const FONT_SIZE_MEDIUM = 15;
export const FONT_SIZE_LARGE = 18;
export const FONT_SIZE_XLARGE = 40;

export const sizeStyle = StyleSheet.create({
  large: { fontSize: FONT_SIZE_LARGE },
  medium: { fontSize: FONT_SIZE_MEDIUM },
  small: { fontSize: FONT_SIZE_SMALL },
  xlarge: { fontSize: FONT_SIZE_XLARGE },
});

export const getSizeStyle: StyleGetterModel<SizeProps> = ({ large, small, xlarge }) => [
  xlarge ? sizeStyle.xlarge : large ? sizeStyle.large : small ? sizeStyle.small : sizeStyle.medium,
];

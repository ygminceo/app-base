import { SizeProps } from '@lib/frontend/core/styles/size.model';
import { StyleGetter } from '@lib/frontend/core/styles/style.model';
import { StyleSheet } from 'react-native';

export const SMALL = 13;
export const MEDIUM = 16;
export const LARGE = 20;
export const XLARGE = 25;

export const sizeStyle = StyleSheet.create({
  large: { fontSize: LARGE },
  medium: { fontSize: MEDIUM },
  small: { fontSize: SMALL },
  xlarge: { fontSize: XLARGE },
});

export const getSizeStyle: StyleGetter<SizeProps> = ({ large, small, xlarge }) => [
  xlarge ? sizeStyle.xlarge : large ? sizeStyle.large : small ? sizeStyle.small : sizeStyle.medium,
];

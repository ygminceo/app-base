import { StyleSheet } from 'react-native';
import {
  BUTTON_HEIGHT_DEFAULT,
  BUTTON_HEIGHT_LARGE,
  BUTTON_HEIGHT_SMALL,
} from '@lib/frontend/core/components/Button/Button.constants';
import { ButtonProps } from '@lib/frontend/core/components/Button/Button.model';
import { borderStyle } from '@lib/frontend/core/styles/border.style';
import { shapeStyle } from '@lib/frontend/core/styles/shape.style';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const buttonStyle = StyleSheet.create({
  default: { height: BUTTON_HEIGHT_DEFAULT },
  small: { height: BUTTON_HEIGHT_SMALL },
  large: { height: BUTTON_HEIGHT_LARGE },
});

export const getButtonStyle: StyleGetterModel<Partial<ButtonProps>> = ({
  small,
  large,
  transparent,
  fullWidth,
}) => [
  borderStyle.shadow,
  large ? buttonStyle.large : small ? buttonStyle.small : buttonStyle.default,
  ...(fullWidth ? [shapeStyle.fullWidth] : []),
  ...(transparent ? [borderStyle.borderPrimary, borderStyle.border] : []),
];

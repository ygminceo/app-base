import { StyleSheet } from 'react-native';
import { ButtonProps } from '@lib/frontend/core/components/Button/Button.model';
import { borderStyle } from '@lib/frontend/core/styles/border.style';
import { flexStyle } from '@lib/frontend/core/styles/flex.style';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const BUTTON_HEIGHT_DEFAULT = 36;
export const BUTTON_HEIGHT_SMALL = 30;

export const buttonStyle = StyleSheet.create({
  default: { height: BUTTON_HEIGHT_DEFAULT },
  small: { height: BUTTON_HEIGHT_SMALL },
});

export const getButtonStyle: StyleGetterModel<ButtonProps> = ({
  small,
  transparent,
  fullWidth,
}) => [
  small ? buttonStyle.small : buttonStyle.default,
  fullWidth ? undefined : flexStyle.selfBaseline,
  ...(transparent ? [borderStyle.borderPrimary, borderStyle.border] : []),
];

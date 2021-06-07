import { ButtonProps } from '@lib/frontend/core/components/Button/Button.model';
import { borderStyle } from '@lib/frontend/core/styles/border.style';
import { flexStyle } from '@lib/frontend/core/styles/flex.style';
import { StyleGetter } from '@lib/frontend/core/styles/style.model';
import { StyleSheet } from 'react-native';

export const BUTTON_HEIGHT_LARGE = 43;
export const BUTTON_HEIGHT_SMALL = 30;

export const buttonStyle = StyleSheet.create({
  large: { height: BUTTON_HEIGHT_LARGE },
  small: { height: BUTTON_HEIGHT_SMALL },
});

export const getButtonStyle: StyleGetter<ButtonProps> = ({ small, transparent, fullWidth }) => [
  small ? buttonStyle.small : buttonStyle.large,
  fullWidth ? undefined : flexStyle.selfBaseline,
  ...(transparent ? [borderStyle.borderPrimary, borderStyle.border] : []),
];

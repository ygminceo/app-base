import { FontProps } from '@lib/frontend/core/styles/font.model';
import { sizeStyle } from '@lib/frontend/core/styles/size.style';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';
import { StyleSheet } from 'react-native';

export const fontStyle = StyleSheet.create({
  bold: { fontWeight: '500' },
  center: { textAlign: 'center' },
  alignRight: { textAlign: 'right' },
  uppercase: { textTransform: 'uppercase' },
  capitalize: { textTransform: 'capitalize' },
});

export const getFontStyle: StyleGetterModel<FontProps> = ({
  bold,
  capitalize,
  center,
  alignRight,
  subtitle,
  title,
  uppercase,
}) => [
  ...(bold || title ? [fontStyle.bold] : []),
  ...(center ? [fontStyle.center] : alignRight ? [fontStyle.alignRight]: []),
  ...(title || subtitle ? [sizeStyle.large] : []),
  ...(uppercase ? [fontStyle.uppercase] : capitalize ? [fontStyle.capitalize] : []),
];

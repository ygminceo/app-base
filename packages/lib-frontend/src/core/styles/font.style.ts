import { FontProps } from '@lib/frontend/core/styles/font.model';
import { sizeStyle } from '@lib/frontend/core/styles/size.style';
import { StyleGetter } from '@lib/frontend/core/styles/style.model';
import { StyleSheet } from 'react-native';

export const fontStyle = StyleSheet.create({
  bold: { fontWeight: '500' },
  center: { textAlign: 'center' },
  uppercase: { textTransform: 'uppercase' },
  capitalize: { textTransform: 'capitalize' },
});

export const getFontStyle: StyleGetter<FontProps> = ({
  bold,
  capitalize,
  center,
  subtitle,
  title,
  uppercase,
}) => [
  ...(bold || title ? [fontStyle.bold] : []),
  ...(center ? [fontStyle.center] : []),
  ...(title || subtitle ? [sizeStyle.large] : []),
  ...(uppercase ? [fontStyle.uppercase] : capitalize ? [fontStyle.capitalize] : []),
];

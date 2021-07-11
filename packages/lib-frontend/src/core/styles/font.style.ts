import { StyleSheet } from 'react-native';
import { FontProps } from '@lib/frontend/core/styles/font.model';
import { sizeStyle } from '@lib/frontend/core/styles/size.style';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';

export const fontStyle = StyleSheet.create({
  lineHeight: { lineHeight: CommonTheme.shape.lineHeight },
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
  tight,
}) => [
  ...(tight ? [] : [fontStyle.lineHeight]),
  ...(bold || title ? [fontStyle.bold] : []),
  ...(center ? [fontStyle.center] : alignRight ? [fontStyle.alignRight] : []),
  ...(title || subtitle ? [sizeStyle.large] : []),
  ...(uppercase ? [fontStyle.uppercase] : capitalize ? [fontStyle.capitalize] : []),
];

import { isNumber } from 'lodash';
import { StyleSheet } from 'react-native';
import { BorderProps } from '@lib/frontend/core/styles/border.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';

export const borderStyle = StyleSheet.create({
  border: { borderStyle: 'solid', borderWidth: 1 },
  borderLeft: { borderStyle: 'solid', borderLeftWidth: 1 },
  borderRight: { borderStyle: 'solid', borderRightWidth: 1 },
  borderTop: { borderStyle: 'solid', borderTopWidth: 1 },
  borderBottom: { borderStyle: 'solid', borderBottomWidth: 1 },
  thick: { borderWidth: 2 },
  borderPrimary: { borderColor: CommonTheme.colors.primary.main },
  borderError: { borderColor: CommonTheme.colors.error.main },
  round: { borderRadius: CommonTheme.shape.borderRadius },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.75,
    elevation: 1,
  },
});

export const getBorderStyle: StyleGetterModel<BorderProps> = ({
  border,
  borderBottom,
  borderError,
  borderLeft,
  borderPrimary,
  borderRadius,
  borderRight,
  borderThick,
  borderTop,
  round,
  shadow,
  theme,
}) => [
  ...(border ? [borderStyle.border, { borderColor: theme?.colors.border }] : []),
  ...(borderLeft ? [borderStyle.borderLeft, { borderLeftColor: theme?.colors.border }] : []),
  ...(borderRight ? [borderStyle.borderRight, { borderRightColor: theme?.colors.border }] : []),
  ...(borderTop ? [borderStyle.borderTop, { borderTopColor: theme?.colors.border }] : []),
  ...(borderBottom ? [borderStyle.borderBottom, { borderBottomColor: theme?.colors.border }] : []),
  ...(isNumber(borderRadius) ? [{ borderRadius }] : round === true ? [borderStyle.round] : []),
  ...(shadow ? [borderStyle.shadow] : []),
  ...(borderThick ? [borderStyle.thick] : []),
  ...(borderError ? [borderStyle.borderError] : borderPrimary ? [borderStyle.borderPrimary] : []),
];

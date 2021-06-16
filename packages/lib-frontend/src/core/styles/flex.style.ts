import { isNil, isNumber } from 'lodash';
import { StyleSheet } from 'react-native';
import { FlexProps } from '@lib/frontend/core/styles/flex.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const flexStyle = StyleSheet.create({
  alignCenter: { alignItems: 'center' },
  alignEnd: { alignItems: 'flex-end' },
  alignStart: { alignItems: 'flex-start' },
  alignStretch: { alignItems: 'stretch' },
  basisAuto: { flexBasis: 'auto' },
  center: { justifyContent: 'center' },
  column: { flexDirection: 'column' },
  end: { justifyContent: 'flex-end' },
  flex: { display: 'flex' },
  grow: { flexGrow: 1 },
  noBasis: { flexBasis: 0 },
  noGrow: { flexGrow: 0 },
  noShrink: { flexShrink: 0 },
  nowrap: { flexWrap: 'nowrap' },
  row: { flexDirection: 'row' },
  selfAuto: { alignSelf: 'auto' },
  selfBaseline: { alignSelf: 'baseline' },
  selfCenter: { alignSelf: 'center' },
  selfEnd: { alignSelf: 'flex-end' },
  selfStart: { alignSelf: 'flex-start' },
  selfStretch: { alignSelf: 'stretch' },
  shrink: { flexShrink: 1 },
  start: { justifyContent: 'flex-start' },
  wrap: { flexWrap: 'wrap' },
});

export const getFlexStyle: StyleGetterModel<FlexProps> = ({
  alignCenter,
  alignEnd,
  alignStart,
  basis,
  center,
  end,
  grow,
  row,
  selfBaseline,
  selfCenter,
  selfEnd,
  selfStart,
  selfStretch,
  shrink,
  wrap,
}) => [
  flexStyle.flex,
  row ? flexStyle.row : flexStyle.column,
  end ? flexStyle.end : center ? flexStyle.center : flexStyle.start,
  alignStart
    ? flexStyle.alignStart
    : alignCenter
    ? flexStyle.alignCenter
    : alignEnd
    ? flexStyle.alignEnd
    : flexStyle.alignStretch,
  selfStart
    ? flexStyle.selfStart
    : selfCenter
    ? flexStyle.selfCenter
    : selfEnd
    ? flexStyle.selfEnd
    : selfStretch
    ? flexStyle.selfStretch
    : selfBaseline
    ? flexStyle.selfBaseline
    : undefined,
  grow === true ? flexStyle.grow : isNumber(grow) ? { flexGrow: grow } : flexStyle.noGrow,
  shrink === true
    ? flexStyle.shrink
    : isNumber(shrink)
    ? { flexShrink: shrink }
    : flexStyle.noShrink,
  isNil(basis) ? (shrink === true ? flexStyle.noBasis : flexStyle.basisAuto) : { flexBasis: basis },
  wrap ? flexStyle.wrap : flexStyle.nowrap,
];

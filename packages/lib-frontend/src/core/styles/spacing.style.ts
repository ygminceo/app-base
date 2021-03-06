import { get, isNil, set } from 'lodash';
import { StyleSheet } from 'react-native';
import { SpacingProps } from '@lib/frontend/core/styles/spacing.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';

export const spacingStyle = StyleSheet.create({
  noPadding: { padding: 0 },
  noPaddingHorizontal: { paddingLeft: 0, paddingRight: 0 },
  noPaddingVertical: { paddingTop: 0, paddingBottom: 0 },
  padding: { padding: CommonTheme.shape.spacing },
  paddingWide: { padding: CommonTheme.shape.spacingWide },
  paddingLeft: { paddingLeft: CommonTheme.shape.spacing },
  paddingRight: { paddingRight: CommonTheme.shape.spacing },
  paddingTop: { paddingTop: CommonTheme.shape.spacing },
  paddingBottom: { paddingBottom: CommonTheme.shape.spacing },
  paddingLeftTight: { paddingLeft: CommonTheme.shape.spacingTight },
  paddingRightTight: { paddingRight: CommonTheme.shape.spacingTight },
  paddingTight: { padding: CommonTheme.shape.spacingTight },
  paddingTopTight: { paddingTop: CommonTheme.shape.spacingTight },
  paddingBottomTight: { paddingBottom: CommonTheme.shape.spacingTight },
  paddingLeftWide: { paddingLeft: CommonTheme.shape.spacingWide },
  paddingRightWide: { paddingRight: CommonTheme.shape.spacingWide },
  paddingTopWide: { paddingTop: CommonTheme.shape.spacingWide },
  paddingBottomWide: { paddingBottom: CommonTheme.shape.spacingWide },
  noMargin: { margin: 0 },
  margin: { margin: CommonTheme.shape.spacing },
  marginAuto: { margin: 'auto' },
  marginTopAuto: { marginTop: 'auto' },
  marginBottomAuto: { marginBottom: 'auto' },
  marginLeftAuto: { marginLeft: 'auto' },
  marginRightAuto: { marginRight: 'auto' },
  marginLeftTight: { marginLeft: CommonTheme.shape.spacingTight },
  marginLeftWide: { marginLeft: CommonTheme.shape.spacingWide },
  marginRightTight: { marginRight: CommonTheme.shape.spacingTight },
  marginRightWide: { marginRight: CommonTheme.shape.spacingWide },
  marginTopTight: { marginTop: CommonTheme.shape.spacingTight },
  marginBottomTight: { marginBottom: CommonTheme.shape.spacingTight },
  marginTopWide: { marginTop: CommonTheme.shape.spacingWide },
  marginBottomWide: { marginBottom: CommonTheme.shape.spacingWide },
  marginLeft: { marginLeft: CommonTheme.shape.spacing },
  marginRight: { marginRight: CommonTheme.shape.spacing },
  marginTight: { margin: CommonTheme.shape.spacingTight },
  marginWide: { margin: CommonTheme.shape.spacingWide },
  marginTop: { marginTop: CommonTheme.shape.spacing },
  marginBottom: { marginBottom: CommonTheme.shape.spacing },
});

const resolve = (value: boolean | number | string | undefined, keys: string[]) =>
  value === true
    ? keys.map((key: any) => get(spacingStyle, key))
    : isNil(value)
    ? []
    : keys.map((key: any) => set({}, key, value));

export const getSpacingStyle: StyleGetterModel<SpacingProps> = ({
  m,
  mAuto,
  mTopAuto,
  mBottomAuto,
  mLeftAuto,
  mRightAuto,
  mBottom,
  mBottomTight,
  mBottomWide,
  mTight,
  mWide,
  mLeft,
  mLeftTight,
  mLeftWide,
  mRight,
  mRightTight,
  mRightWide,
  mTop,
  mTopTight,
  mTopWide,
  p,
  pBottom,
  pBottomTight,
  pBottomWide,
  pTight,
  pWide,
  pLeft,
  pLeftTight,
  pLeftWide,
  pRight,
  pRightTight,
  pRightWide,
  pTop,
  pTopTight,
  pTopWide,
}) => [
  ...(mAuto ? [spacingStyle.marginAuto] : []),
  ...(mBottomAuto ? [spacingStyle.marginBottomAuto] : []),
  ...(mBottomTight ? [spacingStyle.marginBottomTight] : []),
  ...(mBottomWide ? [spacingStyle.marginBottomWide] : []),
  ...(mLeftAuto ? [spacingStyle.marginLeftAuto] : []),
  ...(mLeftTight ? [spacingStyle.marginLeftTight] : []),
  ...(mLeftWide ? [spacingStyle.marginLeftWide] : []),
  ...(mRightAuto ? [spacingStyle.marginRightAuto] : []),
  ...(mRightTight ? [spacingStyle.marginRightTight] : []),
  ...(mRightWide ? [spacingStyle.marginRightWide] : []),
  ...(mTight ? [spacingStyle.marginTight] : []),
  ...(mTopAuto ? [spacingStyle.marginTopAuto] : []),
  ...(mTopTight ? [spacingStyle.marginTopTight] : []),
  ...(mTopWide ? [spacingStyle.marginTopWide] : []),
  ...(mWide ? [spacingStyle.marginWide] : []),
  ...(pBottomTight ? [spacingStyle.paddingBottomTight] : []),
  ...(pBottomWide ? [spacingStyle.paddingBottomWide] : []),
  ...(pLeftTight ? [spacingStyle.paddingLeftTight] : []),
  ...(pLeftWide ? [spacingStyle.paddingLeftWide] : []),
  ...(pRightTight ? [spacingStyle.paddingRightTight] : []),
  ...(pRightWide ? [spacingStyle.paddingRightWide] : []),
  ...(pTight ? [spacingStyle.paddingTight] : []),
  ...(pTopTight ? [spacingStyle.paddingTopTight] : []),
  ...(pTopWide ? [spacingStyle.paddingTopWide] : []),
  ...(pWide ? [spacingStyle.paddingWide] : []),
  ...resolve(m, ['margin']),
  ...resolve(mBottom, ['marginBottom']),
  ...resolve(mLeft, ['marginLeft']),
  ...resolve(mRight, ['marginRight']),
  ...resolve(mTop, ['marginTop']),
  ...resolve(p, ['padding']),
  ...resolve(pBottom, ['paddingBottom']),
  ...resolve(pLeft, ['paddingLeft']),
  ...resolve(pRight, ['paddingRight']),
  ...resolve(pTop, ['paddingTop']),
];

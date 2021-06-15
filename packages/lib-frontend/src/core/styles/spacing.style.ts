import { SpacingProps } from '@lib/frontend/core/styles/spacing.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';
import { get, isNil, set } from 'lodash';
import { StyleSheet } from 'react-native';

export const spacingStyle = StyleSheet.create({
  noPadding: { padding: 0 },
  padding: { padding: CommonTheme.shape.spacing },
  paddingLeft: { paddingLeft: CommonTheme.shape.spacing },
  paddingRight: { paddingRight: CommonTheme.shape.spacing },
  paddingTop: { paddingTop: CommonTheme.shape.spacing },
  paddingBottom: { paddingBottom: CommonTheme.shape.spacing },
  paddingLeftTight: { paddingLeft: CommonTheme.shape.spacingTight },
  paddingRightTight: { paddingRight: CommonTheme.shape.spacingTight },
  paddingTight: { padding: CommonTheme.shape.spacingTight },
  paddingTopTight: { paddingTop: CommonTheme.shape.spacingTight },
  paddingBottomTight: { paddingBottom: CommonTheme.shape.spacingTight },
  noMargin: { margin: 0 },
  margin: { margin: CommonTheme.shape.spacing },
  marginAuto: { margin: 'auto' },
  marginTopAuto: { marginTop: 'auto' },
  marginBottomAuto: { marginBottom: 'auto' },
  marginLeftAuto: { marginLeft: 'auto' },
  marginRightAuto: { marginRight: 'auto' },
  marginLeftTight: { marginLeft: CommonTheme.shape.spacingTight },
  marginLeftWhitespace: { marginLeft: CommonTheme.shape.spacingWhitespace },
  marginRightTight: { marginRight: CommonTheme.shape.spacingTight },
  marginRightWhitespace: { marginRight: CommonTheme.shape.spacingWhitespace },
  marginTopTight: { marginTop: CommonTheme.shape.spacingTight },
  marginBottomTight: { marginBottom: CommonTheme.shape.spacingTight },
  marginLeft: { marginLeft: CommonTheme.shape.spacing },
  marginRight: { marginRight: CommonTheme.shape.spacing },
  marginTight: { margin: CommonTheme.shape.spacingTight },
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
  mTight,
  mLeft,
  mLeftTight,
  mLeftWhitespace,
  mRight,
  mRightTight,
  mRightWhitespace,
  mTop,
  mTopTight,
  p,
  pBottom,
  pBottomTight,
  pTight,
  pLeft,
  pLeftTight,
  pRight,
  pRightTight,
  pTop,
  pTopTight,
}) => [
  ...resolve(p, ['padding']),
  ...resolve(pLeft, ['paddingLeft']),
  ...resolve(pRight, ['paddingRight']),
  ...resolve(pTop, ['paddingTop']),
  ...resolve(pBottom, ['paddingBottom']),
  ...resolve(m, ['margin']),
  ...resolve(mLeft, ['marginLeft']),
  ...resolve(mRight, ['marginRight']),
  ...resolve(mTop, ['marginTop']),
  ...resolve(mBottom, ['marginBottom']),
  ...(pTight ? [spacingStyle.paddingTight] : []),
  ...(pLeftTight ? [spacingStyle.paddingLeftTight] : []),
  ...(pRightTight ? [spacingStyle.paddingRightTight] : []),
  ...(pTopTight ? [spacingStyle.paddingTopTight] : []),
  ...(pBottomTight ? [spacingStyle.paddingBottomTight] : []),
  ...(mTight ? [spacingStyle.marginTight] : []),
  ...(mAuto ? [spacingStyle.marginAuto] : []),
  ...(mTopAuto ? [spacingStyle.marginTopAuto] : []),
  ...(mBottomAuto ? [spacingStyle.marginBottomAuto] : []),
  ...(mLeftAuto ? [spacingStyle.marginLeftAuto] : []),
  ...(mRightAuto ? [spacingStyle.marginRightAuto] : []),
  ...(mLeftTight ? [spacingStyle.marginLeftTight] : []),
  ...(mLeftWhitespace ? [spacingStyle.marginLeftWhitespace] : []),
  ...(mRightTight ? [spacingStyle.marginRightTight] : []),
  ...(mRightWhitespace ? [spacingStyle.marginRightWhitespace] : []),
  ...(mTopTight ? [spacingStyle.marginTopTight] : []),
  ...(mBottomTight ? [spacingStyle.marginBottomTight] : []),
];

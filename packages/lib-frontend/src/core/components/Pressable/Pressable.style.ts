import { PressableProps } from '@lib/frontend/core/components/Pressable/Pressable.model';
import { spacingStyle } from '@lib/frontend/core/styles/spacing.style';
import { isEmpty } from 'lodash';

export const getPressableStyle = ({ from, to }: PressableProps) => [
  ...(isEmpty(from) && isEmpty(to) ? [spacingStyle.paddingTight] : []),
];

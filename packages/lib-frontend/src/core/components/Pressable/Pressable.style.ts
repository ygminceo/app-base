import { isEmpty } from 'lodash';
import { PressableProps } from '@lib/frontend/core/components/Pressable/Pressable.model';
import { spacingStyle } from '@lib/frontend/core/styles/spacing.style';

export const getPressableStyle = ({ from, to }: Partial<PressableProps>) => [
  ...(isEmpty(from) && isEmpty(to) ? [spacingStyle.paddingTight] : []),
];

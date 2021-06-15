import { PROGRESS_BAR_HEIGHT } from '@lib/frontend/core/components/ProgressBar/ProgressBar.constants';
import { ProgressBarProps } from '@lib/frontend/core/components/ProgressBar/ProgressBar.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';
import { StyleSheet } from 'react-native';

export const progressBarStyle = StyleSheet.create({
  style: { height: PROGRESS_BAR_HEIGHT },
});

export const getProgressBarStyle: StyleGetterModel<ProgressBarProps> = ({}) => [progressBarStyle.style];

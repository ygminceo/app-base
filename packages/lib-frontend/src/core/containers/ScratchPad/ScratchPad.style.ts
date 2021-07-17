import { StyleSheet } from 'react-native';
import { ScratchPadProps } from '@lib/frontend/core/containers/ScratchPad/ScratchPad.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const scratchPadStyle = StyleSheet.create({
  style: {},
});

export const getScratchPadStyle: StyleGetterModel<ScratchPadProps> = ({}) => [
  scratchPadStyle.style,
];

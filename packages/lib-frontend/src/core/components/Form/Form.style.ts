import { StyleSheet } from 'react-native';
import { FormProps } from '@lib/frontend/core/components/Form/Form.model';
import { shapeStyle } from '@lib/frontend/core/styles/shape.style';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const FORM_MEDIUM_WIDTH = 380;
export const FORM_LARGE_WIDTH = 500;

export const formStyle = StyleSheet.create({
  medium: {
    width: FORM_MEDIUM_WIDTH,
  },
  large: {
    width: FORM_LARGE_WIDTH,
  },
});

export const getFormStyle: StyleGetterModel<Partial<FormProps>> = ({ isMobile, large }) =>
  isMobile ? shapeStyle.fullWidth : large ? formStyle.large : formStyle.medium;

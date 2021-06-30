import { StyleSheet } from 'react-native';
import { AlertProps } from '@lib/frontend/core/components/Alert/Alert.model';
import { shapeStyle } from '@lib/frontend/core/styles/shape.style';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const ALERT_WIDTH = 250;

export const alertStyle = StyleSheet.create({
  style: {
    width: ALERT_WIDTH,
  },
});

export const getAlertStyle: StyleGetterModel<Partial<AlertProps>> = ({ isMobile }) =>
  isMobile ? [shapeStyle.fullWidth] : [alertStyle.style];

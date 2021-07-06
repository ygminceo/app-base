import { StyleSheet } from 'react-native';
import { CENTER_LAYOUT_WIDTH } from '@lib/frontend/app/layouts/CenterLayout/CenterLayout.constants';
import { shapeStyle } from '@lib/frontend/core/styles/shape.style';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';
import { CenterLayoutProps } from './CenterLayout.model';

export const centerLayoutStyle = StyleSheet.create({
  style: {
    width: CENTER_LAYOUT_WIDTH,
  },
});

export const getCenterLayoutStyle: StyleGetterModel<CenterLayoutProps> = ({ isMobile }) =>
  isMobile ? [shapeStyle.fullWidth] : [centerLayoutStyle.style];

import { StyleSheet } from 'react-native';
import {
  APP_HEADER_HEIGHT_DEFAULT,
  APP_HEADER_HEIGHT_MINIMIZED,
} from '@lib/frontend/app/containers/AppHeader/AppHeader.constants';
import { AppHeaderProps } from '@lib/frontend/app/containers/AppHeader/AppHeader.model';
import { shapeStyle } from '@lib/frontend/core/styles/shape.style';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const appHeaderStyle = StyleSheet.create({
  default: { height: APP_HEADER_HEIGHT_DEFAULT },
  minimized: { height: APP_HEADER_HEIGHT_MINIMIZED },
});

export const getAppHeaderStyle: StyleGetterModel<AppHeaderProps> = ({ isMinimized }) =>
  isMinimized ? [appHeaderStyle.minimized] : [appHeaderStyle.default];

export const getAppHeaderLogoStyle: StyleGetterModel<AppHeaderProps> = ({ isMinimized }) =>
  isMinimized ? [shapeStyle.minimized] : [shapeStyle.noScale];

import { StyleSheet } from 'react-native';
import { APP_SIDE_MENU_WIDTH } from '@lib/frontend/app/containers/AppSideMenu/AppSideMenu.constants';
import { AppSideMenuProps } from '@lib/frontend/app/containers/AppSideMenu/AppSideMenu.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const appSideMenuStyle = StyleSheet.create({
  style: {
    width: APP_SIDE_MENU_WIDTH,
  },
});

export const getAppSideMenuStyle: StyleGetterModel<AppSideMenuProps> = ({}) => [
  appSideMenuStyle.style,
];

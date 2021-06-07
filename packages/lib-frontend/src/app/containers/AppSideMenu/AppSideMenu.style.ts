import { APP_SIDE_MENU_WIDTH } from '@lib/frontend/app/containers/AppSideMenu/AppSideMenu.constants';
import { AppSideMenuProps } from '@lib/frontend/app/containers/AppSideMenu/AppSideMenu.model';
import { StyleGetter } from '@lib/frontend/core/styles/style.model';
import { StyleSheet } from 'react-native';

export const appSideMenuStyle = StyleSheet.create({
  style: {
    width: APP_SIDE_MENU_WIDTH,
  },
});

export const getAppSideMenuStyle: StyleGetter<AppSideMenuProps> = ({}) => [appSideMenuStyle.style];

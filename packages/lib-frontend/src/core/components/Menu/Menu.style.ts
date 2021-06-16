import { StyleSheet } from 'react-native';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const MOBILE_MENU_OPTION_HEIGHT = 32;

export const menuOptionStyle = StyleSheet.create({
  mobile: {
    height: MOBILE_MENU_OPTION_HEIGHT,
  },
});

export const getMenuOptionModelStyle: StyleGetterModel<{}> = ({ isMobile }) =>
  isMobile ? [menuOptionStyle.mobile] : [];

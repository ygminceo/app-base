import { StyleGetter } from '@lib/frontend/core/styles/style.model';
import { StyleSheet } from 'react-native';

export const MOBILE_MENU_OPTION_HEIGHT = 32;

export const menuOptionStyle = StyleSheet.create({
  mobile: {
    height: MOBILE_MENU_OPTION_HEIGHT,
  },
});

export const getMenuOptionStyle: StyleGetter<{}> = ({ isMobile }) =>
  isMobile ? [menuOptionStyle.mobile] : [];

import { StyleSheet } from 'react-native';
import { flexStyle } from '@lib/frontend/core/styles/flex.style';
import { shapeStyle } from '@lib/frontend/core/styles/shape.style';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';
import { _TabBarProps } from '@lib/frontend/routing/containers/Tabs/internal/_TabBar.model';

export const TAB_BAR_ITEM_WIDTH = 160;

export const tabBarItemStyle = StyleSheet.create({
  style: { width: TAB_BAR_ITEM_WIDTH },
});

// TODO: get rid of partial
export const getTabBarStyle: StyleGetterModel<Partial<_TabBarProps>> = ({ isMobile }) =>
  isMobile ? [shapeStyle.fullWidth] : [];

export const getTabBarItemStyle: StyleGetterModel<{}> = ({ isMobile }) =>
  isMobile ? [flexStyle.grow] : [tabBarItemStyle.style];

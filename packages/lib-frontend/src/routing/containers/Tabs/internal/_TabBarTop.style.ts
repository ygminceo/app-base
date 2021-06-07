import { flexStyle } from '@lib/frontend/core/styles/flex.style';
import { shapeStyle } from '@lib/frontend/core/styles/shape.style';
import { StyleGetter } from '@lib/frontend/core/styles/style.model';
import { _TabBarProps } from '@lib/frontend/routing/containers/Tabs/internal/_TabBar.model';
import { StyleSheet } from 'react-native';

export const TAB_BAR_ITEM_WIDTH = 160;

export const tabBarItemStyle = StyleSheet.create({
  style: { width: TAB_BAR_ITEM_WIDTH },
});

// TODO: get rid of partial
export const getTabBarStyle: StyleGetter<Partial<_TabBarProps>> = ({ isMobile }) =>
  isMobile ? [shapeStyle.fullWidth] : [];

export const getTabBarItemStyle: StyleGetter<{}> = ({ isMobile }) =>
  isMobile ? [flexStyle.grow] : [tabBarItemStyle.style];

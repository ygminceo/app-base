import { Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import { _TabBarTop } from '@lib/frontend/routing/containers/Tabs/internal/_TabBarTop';
import { _TabsProps } from '@lib/frontend/routing/containers/Tabs/internal/_Tabs.model';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import React from 'react';

const Tab = createMaterialTopTabNavigator();

export const _Tabs = ({ tabs, ...props }: _TabsProps) => {
  const { styles } = useStyles(props);
  return (
    <Wrapper grow style={styles}>
      <Tab.Navigator
        tabBar={({ state, navigation, jumpTo }: MaterialTopTabBarProps) => (
          <_TabBarTop
            active={state.index}
            routes={state.routes.map((route, i) => ({
              pathname: route.name,
              onPress: () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });
                if (i !== state.index && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                  jumpTo(route.key);
                }
              },
            }))}
          />
        )}>
        {tabs.map((tab, i) => (
          <Tab.Screen key={i} name={tab.title} component={tab.component} />
        ))}
      </Tab.Navigator>
    </Wrapper>
  );
};

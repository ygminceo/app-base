import {
  DefaultTheme,
  NavigationContainer,
  NavigationContainerRef,
  PathConfigMap,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { createRef, Fragment } from 'react';
import { DASHBOARD } from '@lib/common/dashboard/constants';
import { Protected } from '@lib/frontend/authentication/containers';
import { RouteModel } from '@lib/frontend/routing/containers/Router/Router.model';
import { _RouterProps } from '@lib/frontend/routing/containers/Router/internal/_Router.model';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

const getScreens = (routes: RouteModel[]): PathConfigMap =>
  routes.reduce((result, route) => {
    const path = route.pathname.replace(`/${DASHBOARD}`, '');
    return {
      ...result,
      [route.pathname]: route.routes ? { path, screens: getScreens(route.routes) } : path,
    };
  }, {});

const RouteWithSubRoutes = (route: RouteModel) => (
  <Stack.Screen
    key={route.pathname}
    name={route.pathname}
    options={{
      title: route.pathname,
      animationEnabled: false,
      headerShown: false,
      cardStyle: { flexGrow: 1, flexShrink: 0, flexBasis: 'auto' },
    }}>
    {(componentProps) => {
      let children = null;
      if (route.routes) {
        const ChildStack = createStackNavigator();
        children = (
          <ChildStack.Navigator>{route.routes.map(RouteWithSubRoutes)}</ChildStack.Navigator>
        );
      }
      const RouteContainer = route.protected ? Protected : Fragment;
      const RouteComponent = route.component || Fragment;
      const props = route.component
        ? {
            ...(route.props || {}),
            ...componentProps,
          }
        : {};
      return (
        <RouteContainer>
          <RouteComponent {...props}>{children}</RouteComponent>
        </RouteContainer>
      );
    }}
  </Stack.Screen>
);

const Stack = createStackNavigator();

export const navigationRef = createRef<NavigationContainerRef>();

export const _Router = ({ routes }: _RouterProps) => {
  const theme = useTheme();
  const screens = getScreens(routes);
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: theme.colors.background.main,
        },
      }}
      linking={{ prefixes: [''], config: { screens } }}>
      <Stack.Navigator>{routes.map(RouteWithSubRoutes)}</Stack.Navigator>
    </NavigationContainer>
  );
};

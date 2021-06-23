import {
  DefaultTheme,
  NavigationContainer,
  NavigationContainerRef,
  PathConfigMap,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { reduce } from 'lodash';
import React, { createRef, Fragment } from 'react';
import { APP } from '@lib/common/app/constants';
import { Protected } from '@lib/frontend/authentication/containers';
import { RouteModel } from '@lib/frontend/routing/containers/Router/Router.model';
import { _RouterProps } from '@lib/frontend/routing/containers/Router/internal/_Router.model';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

const getScreens = (routes: RouteModel[]): PathConfigMap =>
  reduce(
    routes,
    (result, route) => ({
      ...result,
      [route.pathname]: route.routes
        ? { path: route.pathname.replace(APP, ''), screens: getScreens(route.routes) }
        : route.pathname,
    }),
    {},
  );

const RouteWithSubRoutes = (route: RouteModel) => (
  <Stack.Screen
    key={route.pathname}
    name={route.pathname}
    options={{
      title: route.pathname,
      animationEnabled: false,
      headerShown: false,
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
      return (
        <RouteContainer>
          <RouteComponent {...(route.props || {})} {...componentProps}>
            {children}
          </RouteComponent>
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
          background: theme.colors.background.primary,
        },
      }}
      linking={{ prefixes: [''], config: { screens } }}>
      <Stack.Navigator>{routes.map(RouteWithSubRoutes)}</Stack.Navigator>
    </NavigationContainer>
  );
};

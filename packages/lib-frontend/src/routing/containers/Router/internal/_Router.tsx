import {
  DefaultTheme,
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { createRef, Fragment } from 'react';
import { Protected } from '@lib/frontend/authentication/containers';
import { RouteClassModel } from '@lib/frontend/routing/containers/Router/Router.model';
import { _RouterProps } from '@lib/frontend/routing/containers/Router/internal/_Router.model';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

const RouteWithSubRoutes = (route: RouteClassModel) => (
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
      const RouteParent = route.protected ? Protected : Fragment;
      const RouteComponent = route.component || Fragment;
      return (
        <RouteParent>
          <RouteComponent {...(route.props || {})} {...componentProps}>
            {children}
          </RouteComponent>
        </RouteParent>
      );
    }}
  </Stack.Screen>
);

const Stack = createStackNavigator();

export const navigationRef = createRef<NavigationContainerRef>();

export const _Router = ({ routes }: _RouterProps) => {
  const theme = useTheme();
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
      linking={{ prefixes: [''] }}>
      <Stack.Navigator>{routes.map(RouteWithSubRoutes)}</Stack.Navigator>
    </NavigationContainer>
  );
};

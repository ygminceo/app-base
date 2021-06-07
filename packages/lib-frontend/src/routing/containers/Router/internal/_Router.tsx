import { Protected } from '@lib/frontend/authentication/containers';
import { _RouterProps } from '@lib/frontend/routing/containers/Router/internal/_Router.model';
import { RouteClass } from '@lib/frontend/routing/containers/Router/Router.model';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';
import {
  DefaultTheme,
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { createRef, Fragment } from 'react';

const RouteWithSubRoutes = (route: RouteClass) => (
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

// import { Protected } from '@lib/frontend/authentication/containers';
// import { _RouterProps } from '@lib/frontend/routing/containers/Router/internal/_Router.model';
// import { RouteClass } from '@lib/frontend/routing/containers/Router/Router.model';
// import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';
// import {
//   DefaultTheme,
//   NavigationContainer,
//   NavigationContainerRef,
// } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import React, { createRef, Fragment } from 'react';

// type ScreensClass = { [name: string]: { path: string; screens: ScreensClass } };

// const RouteWithSubRoutes = (route: RouteClass, screens: ScreensClass) => {
//   screens[route.pathname] = { path: route.pathname, screens: {} };
//   return (
//     <Stack.Screen
//       key={route.pathname}
//       name={route.pathname}
//       options={{
//         title: route.pathname,
//         animationEnabled: false,
//         headerShown: false,
//       }}>
//       {(componentProps) => {
//         let children = null;
//         if (route.routes) {
//           const ChildStack = createStackNavigator();
//           children = (
//             <ChildStack.Navigator>
//               {route.routes.map((childRoute) =>
//                 RouteWithSubRoutes(childRoute, screens[route.pathname].screens),
//               )}
//             </ChildStack.Navigator>
//           );
//         }
//         const RouteParent = route.protected ? Protected : Fragment;
//         const RouteComponent = route.component || Fragment;
//         return (
//           <RouteParent>
//             <RouteComponent {...(route.props || {})} {...componentProps}>
//               {children}
//             </RouteComponent>
//           </RouteParent>
//         );
//       }}
//     </Stack.Screen>
//   );
// };

// const Stack = createStackNavigator();

// export const navigationRef = createRef<NavigationContainerRef>();

// export const _Router = ({ routes }: _RouterProps) => {
//   const theme = useTheme();
//   const screens = {};
//   const children = routes.map((route) => RouteWithSubRoutes(route, screens));
//   return (
//     <NavigationContainer
//       ref={navigationRef}
//       theme={{
//         ...DefaultTheme,
//         colors: {
//           ...DefaultTheme.colors,
//           background: theme.colors.background.primary,
//         },
//       }}
//       linking={{
//         enabled: true,
//         prefixes: [''],
//         // config: { screens },
//       }}>
//       <Stack.Navigator>{children}</Stack.Navigator>
//     </NavigationContainer>
//   );
// };

import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import { split, trim } from 'lodash';
import { ObjectModel } from '@lib/common/core/models';
import { _UseRouterReturnsModel } from '@lib/frontend/routing/hooks/useRouter/internal/_useRouter.model';

const getNestedPath = (pathname: string): { screen: string; params: object } => {
  const splitted = split(trim(pathname, '/'), '/', 2);
  if (splitted.length > 1) {
    return { screen: `/${splitted[0]}`, params: getNestedPath(splitted[1]) };
  }
  return { screen: `/${splitted[0]}`, params: {} };
};

export const _useRouter = (): _UseRouterReturnsModel => {
  const navigation = useNavigation();
  const route = useRoute();

  const location = {
    pathname: route && route.name,
    params: route && route.params,
  };

  return {
    location,

    push: <P extends ObjectModel>(pathname: string, params?: P) => {
      const { screen, params: nestedParams } = getNestedPath(pathname);
      navigation &&
        navigation.dispatch(StackActions.push(screen, { ...(params || {}), ...nestedParams }));
    },

    replace: <P extends ObjectModel>(pathname: string, params?: P) => {
      const { screen, params: nestedParams } = getNestedPath(pathname);
      navigation &&
        navigation.dispatch(StackActions.replace(screen, { ...(params || {}), ...nestedParams }));
    },

    back: () => navigation && navigation.dispatch(StackActions.pop(1)),
  };
};

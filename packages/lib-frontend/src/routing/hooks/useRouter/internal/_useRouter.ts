import { _UseRouterReturns } from '@lib/frontend/routing/hooks/useRouter/internal/_useRouter.model';
import { ParamsType } from '@lib/frontend/routing/hooks/useRouter/useRouter.model';
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';

export const _useRouter = (): _UseRouterReturns => {
  const navigation = useNavigation();
  const route = useRoute();

  const location = {
    pathname: route && route.name,
    params: route && route.params,
  };

  return {
    location,

    push: <P extends ParamsType>(pathname: string, params?: P) =>
      navigation && navigation.dispatch(StackActions.push(pathname, params)),

    replace: <P extends ParamsType>(pathname: string, params?: P) =>
      navigation && navigation.dispatch(StackActions.replace(pathname, params)),

    back: () => navigation && navigation.dispatch(StackActions.pop(1)),
  };
};

import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import { _UseRouterReturnsModel } from '@lib/frontend/routing/hooks/useRouter/internal/_useRouter.model';
import { RouterParamsModel } from '@lib/frontend/routing/hooks/useRouter/useRouter.model';

export const _useRouter = (): _UseRouterReturnsModel => {
  const navigation = useNavigation();
  const route = useRoute();

  const location = {
    pathname: route && route.name,
    params: route && route.params,
  };

  return {
    location,

    push: <P extends RouterParamsModel>(pathname: string, params?: P) =>
      navigation && navigation.dispatch(StackActions.push(pathname, params)),

    replace: <P extends RouterParamsModel>(pathname: string, params?: P) =>
      navigation && navigation.dispatch(StackActions.replace(pathname, params)),

    back: () => navigation && navigation.dispatch(StackActions.pop(1)),
  };
};

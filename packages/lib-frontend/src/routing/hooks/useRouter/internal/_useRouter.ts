import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import { ObjectModel } from '@lib/common/core/models';
import { _UseRouterReturnsModel } from '@lib/frontend/routing/hooks/useRouter/internal/_useRouter.model';

export const _useRouter = (): _UseRouterReturnsModel => {
  const navigation = useNavigation();
  const route = useRoute();

  const location = {
    pathname: route && route.name,
    params: route && route.params,
  };

  return {
    location,

    push: <P extends ObjectModel>(pathname: string, params?: P) =>
      navigation && navigation.dispatch(StackActions.push(pathname, params)),

    replace: <P extends ObjectModel>(pathname: string, params?: P) =>
      navigation && navigation.dispatch(StackActions.replace(pathname, params)),

    back: () => navigation && navigation.dispatch(StackActions.pop(1)),
  };
};

import { flattenDepth, isFunction, isNil, reduce } from 'lodash';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useIsMobile } from '@lib/frontend/core/hooks';
import {
  UseStylesParamsModel,
  UseStylesReturnsModel,
} from '@lib/frontend/core/hooks/useStyles/useStyles.model';
import { NativeStyleModel, StyleGetterModel } from '@lib/frontend/core/styles/style.model';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

export const useStyles = <P>(
  ...[props, deps]: UseStylesParamsModel<P>
): UseStylesReturnsModel<P> => {
  const theme = useTheme();
  const isMobile = useIsMobile();
  const inheritedStyles = useMemo<NativeStyleModel>(() => props.style, [props.style]);
  const computedStyles = useMemo<NativeStyleModel>(
    () =>
      reduce<StyleGetterModel<P>, NativeStyleModel>(
        deps,
        (result, dep) =>
          isNil(dep)
            ? result
            : flattenDepth([result, isFunction(dep) ? dep({ ...props, theme, isMobile }) : dep], 1),
        [],
      ),
    [props, deps, theme, isMobile],
  );
  return {
    inheritedStyles: StyleSheet.flatten(inheritedStyles),
    computedStyles: StyleSheet.flatten(computedStyles),
    styles: StyleSheet.flatten([computedStyles, inheritedStyles]),
  };
};

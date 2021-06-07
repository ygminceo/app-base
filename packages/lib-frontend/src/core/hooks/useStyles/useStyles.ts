import { useIsMobile } from '@lib/frontend/core/hooks';
import {
  UseStylesProps,
  UseStylesReturns,
} from '@lib/frontend/core/hooks/useStyles/useStyles.model';
import { NativeStyle, StyleGetter } from '@lib/frontend/core/styles/style.model';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';
import { flattenDepth, isFunction, isNil, reduce } from 'lodash';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useStyles = <P>(...[props, deps]: UseStylesProps<P>): UseStylesReturns<P> => {
  const theme = useTheme();
  const isMobile = useIsMobile();
  const inheritedStyles = useMemo<NativeStyle>(() => props.style, [props.style]);
  const computedStyles = useMemo<NativeStyle>(
    () =>
      reduce<StyleGetter<P>, NativeStyle>(
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
    styles: StyleSheet.flatten([inheritedStyles, computedStyles]),
  };
};

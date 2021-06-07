import { useStyles } from '@lib/frontend/core/hooks';
import { StyledPropsWithChildren, StyleGetter } from '@lib/frontend/core/styles/style.model';
import { ComponentClass, createElement, forwardRef, FunctionComponent, RefObject } from 'react';
// @ts-ignore
import { unstable_createElement } from 'react-native-web';

const compose = <P, Q>({
  component,
  isWeb,
  getProps,
  styles,
}: {
  component: FunctionComponent<Q> | ComponentClass<Q> | string;
  isWeb?: boolean;
  getProps?: (props: P, ref?: RefObject<any>) => Q;
  styles?: StyleGetter<P>;
}) => {
  const ComposedComponent = forwardRef<
    RefObject<any>,
    StyledPropsWithChildren<P & { nativeID?: string }>
  >((props: StyledPropsWithChildren<P & { nativeID?: string }>, ref: any) => {
    const { styles: componentStyles } = useStyles<P>(props, [styles]);
    const componentProps = getProps ? getProps(props, ref) : (props as unknown as Q);
    const create = isWeb ? unstable_createElement : createElement;
    return create(component, {
      ...componentProps,
      style: componentStyles,
      ref,
      nativeID: props.nativeID,
    });
  });
  return ComposedComponent;
};

export default compose;

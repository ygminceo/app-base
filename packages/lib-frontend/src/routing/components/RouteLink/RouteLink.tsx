import { isString } from 'lodash';
import React from 'react';
import { Link, Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import { RouteLinkProps } from '@lib/frontend/routing/components/RouteLink/RouteLink.model';
import { useRouter } from '@lib/frontend/routing/hooks';

export const RouteLink = <P,>({ children, to, replace, params, ...props }: RouteLinkProps<P>) => {
  const { styles } = useStyles(props);
  const router = useRouter();
  return (
    <Wrapper
      style={styles}
      onPress={() => (replace ? router.replace : router.push)(`[[...locale]]/${to}`, params)}>
      {isString(children) ? <Link>{children}</Link> : children}
    </Wrapper>
  );
};

import { get, isArray, isFunction, reduce, set, toString } from 'lodash';
import React, { createElement, isValidElement } from 'react';
import { CATALOG_GROUPS } from '@lib/frontend/admin/containers/Catalog/Catalog.constants';
import {
  CatalogGroupModel,
  CatalogModel,
} from '@lib/frontend/admin/containers/Catalog/Catalog.model';
import { Text, Wrapper } from '@lib/frontend/core/components';

const formatProps = (props: object): string =>
  JSON.stringify(
    reduce(
      props,
      (result, v, k) => {
        let formatted;
        if (isValidElement(v)) {
          formatted = 'React Element';
        } else if (isFunction(v)) {
          formatted = 'Function';
        } else if (isArray(v)) {
          formatted = '[]';
        } else {
          formatted = toString(v);
        }
        return set(result, k, formatted);
      },
      {},
    ),
    null,
    2,
  );

export const Catalog = () => (
  <Wrapper grow p>
    {CATALOG_GROUPS.map((componentGroup: CatalogGroupModel<any>, i: number) => (
      <Wrapper key={`group-${i}`} spacing>
        <Text title>
          {get(componentGroup.component, 'name') ||
            get(componentGroup.component, 'displayName') ||
            componentGroup.title}
        </Text>
        <Wrapper row horizontalScrollable spacing>
          {componentGroup.components.map((component: CatalogModel<any>, j: number) => {
            const props = { ...componentGroup.props, ...component.props };
            return (
              <Wrapper key={`component-${j}`} border p round selfStart>
                {component.title && <Text subtitle>{component.title}</Text>}
                <Wrapper
                  grow
                  width={component.width || componentGroup.width || 300}
                  height={component.height || componentGroup.height || 160}
                  verticalScrollable
                  horizontalScrollable
                  borderBottom>
                  <Wrapper grow>{createElement(componentGroup.component, props)}</Wrapper>
                </Wrapper>
                <Wrapper height={100} verticalScrollable horizontalScrollable>
                  <Text small>{formatProps(props)}</Text>
                </Wrapper>
              </Wrapper>
            );
          })}
        </Wrapper>
      </Wrapper>
    ))}
  </Wrapper>
);

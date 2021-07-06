import React from 'react';
import { Text, Wrapper } from '@lib/frontend/core/components';
import { ProductsMenuOptionProps } from '@lib/frontend/landing/containers/ProductsMenuOption/ProductsMenuOption.model';

export const ProductsMenuOption = ({ ...props }: ProductsMenuOptionProps) => {
  return (
    <Wrapper grow>
      <Text>Products</Text>
    </Wrapper>
  );
};

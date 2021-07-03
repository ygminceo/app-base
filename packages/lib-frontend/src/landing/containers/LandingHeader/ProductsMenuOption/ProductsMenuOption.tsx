import React from 'react';
import { Wrapper, Text } from '@lib/frontend/core/components';
import { ProductsMenuOptionProps } from '@lib/frontend/landing/containers/LandingHeader/ProductsMenuOption/ProductsMenuOption.model';

export const ProductsMenuOption = ({ ...props }: ProductsMenuOptionProps) => {
  return (
    <Wrapper grow>
      <Text>Products</Text>
    </Wrapper>
  );
};

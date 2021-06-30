import React from 'react';
import { ProductsMenuOptionProps } from '@lib/frontend/app/containers/LandingHeader/ProductsMenuOption/ProductsMenuOption.model';
import { Wrapper, Text } from '@lib/frontend/core/components';

export const ProductsMenuOption = ({ ...props }: ProductsMenuOptionProps) => {
  return (
    <Wrapper grow>
      <Text>Products</Text>
    </Wrapper>
  );
};

import React from 'react';
import { LANDING } from '@lib/common/landing/constants';
import { IconText, Pressable, Wrapper } from '@lib/frontend/core/components';
import { ProductsMenuOptionProps } from '@lib/frontend/landing/containers/ProductsMenuOption/ProductsMenuOption.model';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const ProductsMenuOption = ({ ...props }: ProductsMenuOptionProps) => {
  const { t } = useTranslation([LANDING]);
  return (
    <Wrapper grow spacingTight>
      <Pressable>
        <IconText icon="cube">{'Test'}</IconText>
      </Pressable>
    </Wrapper>
  );
};

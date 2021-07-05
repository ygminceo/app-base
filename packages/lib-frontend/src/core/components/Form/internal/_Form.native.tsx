import React, { Fragment } from 'react';
import { Wrapper } from '@lib/frontend/core/components';
import { _FormProps } from '@lib/frontend/core/components/Form/internal/_Form.model';
import compose from '@lib/frontend/core/utils/compose/compose';

export const _Form = compose<_FormProps, any>({
  component: Fragment,
  getProps: ({ children }) => (
    <Wrapper grow spacing>
      {children}
    </Wrapper>
  ),
});

import React, { SyntheticEvent } from 'react';
import { Wrapper } from '@lib/frontend/core/components';
import { _FormProps } from '@lib/frontend/core/components/Form/internal/_Form.model';
import compose from '@lib/frontend/core/utils/compose/compose';

export const _Form = compose<_FormProps, any>({
  component: 'form',
  isWeb: true,
  getProps: ({ children, onSubmit }) => ({
    children: (
      <Wrapper grow spacing>
        {children}
        <button type="submit" style={{ display: 'none' }} />
      </Wrapper>
    ),
    onSubmit: (e: SyntheticEvent) => {
      e.preventDefault();
      onSubmit();
    },
  }),
});

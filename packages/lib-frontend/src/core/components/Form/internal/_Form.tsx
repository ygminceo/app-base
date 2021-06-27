import { SyntheticEvent } from 'react';
import React from 'react';
import { _FormProps } from '@lib/frontend/core/components/Form/internal/_Form.model';
import compose from '@lib/frontend/core/utils/compose/compose';

export const _Form = compose<_FormProps, any>({
  component: 'form',
  isWeb: true,
  getProps: ({ children, onSubmit }) => ({
    children: (
      <>
        {children}
        <button type="submit" style={{ display: 'none' }} />
      </>
    ),
    onSubmit: (e: SyntheticEvent) => {
      e.preventDefault();
      onSubmit();
    },
  }),
});

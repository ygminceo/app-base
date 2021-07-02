import { get } from 'lodash';
import React, { useEffect } from 'react';
import { openLink } from 'react-native-plaid-link-sdk';
import { _BankModalProps } from '@lib/frontend/billing/containers/BankButton/internal/_BankModal.model';

export const _BankModal = ({ isOpen, token, onSuccess, onClose }: _BankModalProps) => {
  useEffect(() => {
    token &&
      isOpen &&
      openLink({
        tokenConfig: { token },
        onSuccess: ({ publicToken, metadata }) =>
          onSuccess({
            token: publicToken,
            bank: {
              id: get(metadata, ['users', 0, 'id'], ''),
              name: get(metadata, ['users', 0, 'name'], ''),
              institution_id: get(metadata, ['institution', 'id'], ''),
              institution_name: get(metadata, ['institution', 'name'], ''),
            },
          }),
        onExit: onClose,
      });
  }, [token, isOpen]);

  return <></>;
};

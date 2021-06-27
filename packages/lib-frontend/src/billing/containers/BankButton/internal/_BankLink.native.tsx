import { get } from 'lodash';
import { useEffect } from 'react';
import React from 'react';
import { openLink } from 'react-native-plaid-link-sdk';
import { _BankLinkProps } from '@lib/frontend/billing/containers/BankButton/internal/_BankLink.model';
import { useUser } from '@lib/frontend/user/stores/user.reducer';

export const _BankLink = ({ token, onSuccess, onError }: _BankLinkProps) => {
  useEffect(() => {
    token &&
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
        onExit: onError,
      });
  }, [token]);

  return <></>;
};

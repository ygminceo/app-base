import { get } from 'lodash';
import { useEffect } from 'react';
import React from 'react';
import { openLink } from 'react-native-plaid-link-sdk';
import { useAccount } from '@lib/frontend/account/stores/account.reducer';
import { _BankLinkProps } from '@lib/frontend/billing/containers/BankAccountButton/internal/_BankLink.model';

export const _BankLink = ({ token, onSuccess, onError }: _BankLinkProps) => {
  const account = useAccount();

  useEffect(() => {
    account &&
      token &&
      openLink({
        tokenConfig: { token },
        onSuccess: ({ publicToken, metadata }) =>
          onSuccess({
            accountId: account._id,
            token: publicToken,
            bankAccount: {
              id: get(metadata, ['accounts', 0, 'id'], ''),
              name: get(metadata, ['accounts', 0, 'name'], ''),
              institution_id: get(metadata, ['institution', 'id'], ''),
              institution_name: get(metadata, ['institution', 'name'], ''),
            },
          }),
        onExit: onError,
      });
  }, [account, token]);

  return <></>;
};

import { get } from 'lodash';
import React, { useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import { useAccount } from '@lib/frontend/account/stores/account.reducer';
import { _BankLinkProps } from '@lib/frontend/billing/containers/BankAccountButton/internal/_BankLink.model';

export const _BankLink = ({ token, onSuccess, onError }: _BankLinkProps) => {
  const account = useAccount();

  // TODO: handle plaid error
  const { open, ready, error } = usePlaidLink({
    token,
    onSuccess: (publicToken: string, metadata: any) =>
      account &&
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

  useEffect(() => {
    ready && open();
  }, [ready]);

  return <></>;
};

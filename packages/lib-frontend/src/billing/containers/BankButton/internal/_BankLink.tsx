import { get } from 'lodash';
import React, { useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import { _BankLinkProps } from '@lib/frontend/billing/containers/BankButton/internal/_BankLink.model';

export const _BankLink = ({ token, onSuccess, onError }: _BankLinkProps) => {
  // TODO: handle plaid error
  const { open, ready, error } = usePlaidLink({
    token,
    onSuccess: (publicToken: string, metadata: any) =>
      onSuccess({
        token: publicToken,
        bank: {
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

import { useAccount } from '@lib/frontend/account/stores/account.reducer';
import { _BankLinkProps } from '@lib/frontend/payment/containers/BankAccountButton/internal/_BankLink.model';
import React, { useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';

export const _BankLink = ({ token, onSuccess, onError }: _BankLinkProps) => {
  const account = useAccount();

  // TODO: handle error
  const { open, ready, error } = usePlaidLink({
    token,
    onSuccess: (publicToken: string, metadata: any) =>
      account &&
      onSuccess({
        account_id: account._id,
        token: publicToken,
        bankAccount: {
          id: metadata.account.id,
          name: metadata.account.name,
          institution_id: metadata.institution.institution_id,
          institution_name: metadata.institution.name,
        },
      }),
    onExit: onError,
  });

  useEffect(() => {
    ready && open();
  }, [ready]);

  return <></>;
};

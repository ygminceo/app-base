import { useAccount } from '@lib/frontend/account/stores/account.reducer';
import { signInModalIsOpenSetAction } from '@lib/frontend/authentication/actions/signInModalIsOpen/signInModalIsOpen.action';
import { ProtectedProps } from '@lib/frontend/authentication/containers/Protected/Protected.model';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const Protected = ({ children }: ProtectedProps) => {
  const account = useAccount();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signInModalIsOpenSetAction(account === null));
  }, [account]);

  return <>{account === undefined ? null : children}</>;
};

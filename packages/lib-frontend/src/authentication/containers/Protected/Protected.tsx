import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signInModalIsOpenSetAction } from '@lib/frontend/authentication/actions/signInModalIsOpen/signInModalIsOpen.action';
import { ProtectedProps } from '@lib/frontend/authentication/containers/Protected/Protected.model';
import { useUser } from '@lib/frontend/user/stores/user.reducer';

export const Protected = ({ children }: ProtectedProps) => {
  const user = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signInModalIsOpenSetAction(user === null));
  }, [user]);

  return <>{user === undefined ? null : children}</>;
};

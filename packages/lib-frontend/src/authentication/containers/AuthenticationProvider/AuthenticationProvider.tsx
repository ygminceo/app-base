import React from 'react';
import { SignInForm } from '@lib/frontend/authentication/containers';
import { AuthenticationProviderProps } from '@lib/frontend/authentication/containers/AuthenticationProvider/AuthenticationProvider.model';
import { useSignInModalIsOpen } from '@lib/frontend/authentication/stores/authentication.reducer';
import { Modal } from '@lib/frontend/core/components';

export const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
  const signInModalIsOpen = useSignInModalIsOpen();
  return (
    <>
      <Modal isOpen={signInModalIsOpen}>
        <SignInForm />
      </Modal>
      {children}
    </>
  );
};

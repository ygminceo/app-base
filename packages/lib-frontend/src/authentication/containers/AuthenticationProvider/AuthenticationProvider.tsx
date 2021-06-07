import { SignInForm } from '@lib/frontend/authentication/containers';
import { AuthenticationProviderProps } from '@lib/frontend/authentication/containers/AuthenticationProvider/AuthenticationProvider.model';
import { useSignInModalIsOpen } from '@lib/frontend/authentication/stores/authentication.reducer';
import '@lib/frontend/authentication/utils/FirebaseApp/FirebaseApp';
import { Modal } from '@lib/frontend/core/components';
import React from 'react';

export const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
  const signInModalIsOpen = useSignInModalIsOpen();
  return (
    <>
      <Modal isOpen={signInModalIsOpen} isFullSize>
        <SignInForm />
      </Modal>
      {children}
    </>
  );
};

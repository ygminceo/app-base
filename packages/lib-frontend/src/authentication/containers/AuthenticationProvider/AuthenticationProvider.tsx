import React from 'react';
import { SignInModal } from '@lib/frontend/authentication/containers';
import { AuthenticationProviderProps } from '@lib/frontend/authentication/containers/AuthenticationProvider/AuthenticationProvider.model';

export const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => (
  <>
    <SignInModal />
    {children}
  </>
);

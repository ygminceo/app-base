import React from 'react';
import { useDispatch } from 'react-redux';
import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { signInModalIsOpenSetAction } from '@lib/frontend/authentication/actions/signInModalIsOpen/signInModalIsOpen.action';
import { SignInButtonProps } from '@lib/frontend/authentication/containers/SignInButton/SignInButton.model';
import { Button } from '@lib/frontend/core/components';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { AppDispatchModel } from '@lib/frontend/root/stores/store';

export const SignInButton = ({ ...props }: SignInButtonProps) => {
  const { t } = useTranslation([AUTHENTICATION]);
  const dispatch = useDispatch<AppDispatchModel>();
  return (
    <Button
      {...props}
      onPress={() => dispatch(signInModalIsOpenSetAction(true))}
      trackable={{ object: 'SignInButton' }}>
      {t('authentication:labels.signIn')}
    </Button>
  );
};

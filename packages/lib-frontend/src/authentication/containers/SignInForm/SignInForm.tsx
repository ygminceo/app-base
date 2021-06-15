import { SignInRequestModel } from '@lib/common/authentication/models';
import { SIGNIN_FORM_STEPS } from '@lib/frontend/authentication/containers/SignInForm/SignInForm.constants';
import { SignInFormProps } from '@lib/frontend/authentication/containers/SignInForm/SignInForm.model';
import { Steps } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import React from 'react';

export const SignInForm = (props: SignInFormProps) => {
  const { styles } = useStyles(props);
  return <Steps<SignInRequestModel> style={styles} steps={SIGNIN_FORM_STEPS} />;
};

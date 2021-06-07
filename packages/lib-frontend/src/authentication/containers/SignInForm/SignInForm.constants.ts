import { SignInRequest } from '@lib/common/authentication/models';
import { otpCreateAction } from '@lib/frontend/authentication/actions/otpCreate/otpCreate.action';
import { signInAction } from '@lib/frontend/authentication/actions/signIn/signIn.action';
import { EmailForm } from '@lib/frontend/authentication/containers/SignInForm/EmailForm/EmailForm';
import { EmailFormProps } from '@lib/frontend/authentication/containers/SignInForm/EmailForm/EmailForm.model';
import { OtpForm } from '@lib/frontend/authentication/containers/SignInForm/OtpForm/OtpForm';
import { OtpFormProps } from '@lib/frontend/authentication/containers/SignInForm/OtpForm/OtpForm.model';
import { StepType } from '@lib/frontend/core/components/Steps/Steps.model';
import { store } from '@lib/frontend/root/stores/store';
import { unwrapResult } from '@reduxjs/toolkit';

export const SIGNIN_FORM_STEPS: StepType<SignInRequest, any>[] = [
  {
    component: EmailForm,
  } as StepType<SignInRequest, EmailFormProps>,

  {
    component: OtpForm,
    getProps: (data) => ({
      username: data.emailAddress,
      onSend: (username) => store.dispatch(otpCreateAction({ username })).then(unwrapResult),
      onSubmit: (otpData) =>
        store.dispatch(signInAction({ ...data, otp: otpData.otp })).then(unwrapResult),
    }),
  } as StepType<SignInRequest, OtpFormProps>,
];

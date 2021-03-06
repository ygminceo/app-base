import { unwrapResult } from '@reduxjs/toolkit';
import { SignInRequestModel } from '@lib/common/authentication/models';
import { otpCreateAction } from '@lib/frontend/authentication/actions/otpCreate/otpCreate.action';
import { signInAction } from '@lib/frontend/authentication/actions/signIn/signIn.action';
import { EmailForm, OtpForm } from '@lib/frontend/authentication/containers';
import { EmailFormProps } from '@lib/frontend/authentication/containers/EmailForm/EmailForm.model';
import { OtpFormProps } from '@lib/frontend/authentication/containers/OtpForm/OtpForm.model';
import { StepModel } from '@lib/frontend/core/components/Steps/Steps.model';
import { store } from '@lib/frontend/root/stores/store';

export const SIGNIN_FORM_STEPS: StepModel<SignInRequestModel, any>[] = [
  {
    key: 'Email',
    getComponent: () => EmailForm,
    getProps: (data) => ({
      onSubmit: () =>
        // TODO: doesn't need to be action?
        store.dispatch(otpCreateAction({ username: data.email })).then(unwrapResult),
    }),
  } as StepModel<SignInRequestModel, EmailFormProps>,

  {
    key: 'Otp',
    getComponent: () => OtpForm,
    getProps: (data) => ({
      username: data.email,
      onSend: (username) => store.dispatch(otpCreateAction({ username })).then(unwrapResult),
      onSubmit: (otpData) =>
        store.dispatch(signInAction({ ...data, otp: otpData.otp })).then(unwrapResult),
    }),
  } as StepModel<SignInRequestModel, OtpFormProps>,
];

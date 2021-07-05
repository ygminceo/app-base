import { ContactRequestModel } from '@lib/common/app/models';
import { otpCreateAction } from '@lib/frontend/authentication/actions/otpCreate/otpCreate.action';
import { signInAction } from '@lib/frontend/authentication/actions/signIn/signIn.action';
import { EmailForm, OtpForm } from '@lib/frontend/authentication/containers';
import { EmailFormProps } from '@lib/frontend/authentication/containers/EmailForm/EmailForm.model';
import { OtpFormProps } from '@lib/frontend/authentication/containers/OtpForm/OtpForm.model';
import { StepModel } from '@lib/frontend/core/components/Steps/Steps.model';
import { store } from '@lib/frontend/root/stores/store';
import { unwrapResult } from '@reduxjs/toolkit';

export const CONTACT_FORM_STEPS: StepModel<ContactRequestModel, any>[] = [
  {
    getComponent: () => EmailForm,
  } as StepModel<ContactRequestModel, EmailFormProps>,

  {
    getComponent: () => OtpForm,
    getProps: (data) => ({
      username: data.emailAddress,
      onSend: (username) => store.dispatch(otpCreateAction({ username })).then(unwrapResult),
      onSubmit: (otpData) =>
        store.dispatch(signInAction({ ...data, otp: otpData.otp })).then(unwrapResult),
    }),
  } as StepModel<ContactRequestModel, OtpFormProps>,
];

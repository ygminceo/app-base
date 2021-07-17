import React from 'react';
import { useDispatch } from 'react-redux';
import { SignInRequestModel } from '@lib/common/authentication/models';
import { signInModalIsOpenSetAction } from '@lib/frontend/authentication/actions/signInModalIsOpen/signInModalIsOpen.action';
import { SIGNIN_FORM_STEPS } from '@lib/frontend/authentication/containers/SignInModal/SignInModal.constants';
import { SignInModalProps } from '@lib/frontend/authentication/containers/SignInModal/SignInModal.model';
import { useSignInModalIsOpen } from '@lib/frontend/authentication/stores/authentication.reducer';
import { Modal, Steps } from '@lib/frontend/core/components';
import { AppDispatchModel } from '@lib/frontend/root/stores/store';

export const SignInModal = ({ ...props }: SignInModalProps) => {
  const signInModalIsOpen = useSignInModalIsOpen();
  const dispatch = useDispatch<AppDispatchModel>();
  return (
    <Modal isOpen={signInModalIsOpen} onClose={() => dispatch(signInModalIsOpenSetAction(false))}>
      <Steps<SignInRequestModel> steps={SIGNIN_FORM_STEPS} />
    </Modal>
  );
};

import { createAction } from '@reduxjs/toolkit';
import { AUTHENTICATION } from '@lib/common/authentication/constants';

export const signInModalIsOpenSetAction = createAction<boolean>(
  `${AUTHENTICATION}/SIGNIN_MODAL_IS_OPEN_SET`,
);

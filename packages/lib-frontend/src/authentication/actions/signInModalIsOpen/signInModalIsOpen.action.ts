import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { createAction } from '@reduxjs/toolkit';

export const signInModalIsOpenSetAction = createAction<boolean>(`${AUTHENTICATION}/SIGNIN_MODAL_IS_OPEN_SET`);

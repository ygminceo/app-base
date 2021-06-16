import { createReducer } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { signInModalIsOpenSetAction } from '@lib/frontend/authentication/actions/signInModalIsOpen/signInModalIsOpen.action';
import { AuthenticationStateModel } from '@lib/frontend/authentication/stores/authenticationState.model';
import { RootStateModel } from '@lib/frontend/root/stores/rootState.model';

const initialState: AuthenticationStateModel = {
  account: undefined,
  signInModalIsOpen: false,
};

export const authenticationReducer = createReducer<AuthenticationStateModel>(
  initialState,
  (builder) =>
    builder.addCase(signInModalIsOpenSetAction, (state, action) => {
      state.signInModalIsOpen = action.payload;
    }),
);

export const useSignInModalIsOpen = () =>
  useSelector<RootStateModel, boolean>((state) => state[AUTHENTICATION].signInModalIsOpen);

import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { signInModalIsOpenSetAction } from '@lib/frontend/authentication/actions/signInModalIsOpen/signInModalIsOpen.action';
import { AuthenticationState } from '@lib/frontend/authentication/stores/authenticationState.model';
import { RootState } from '@lib/frontend/root/stores/rootState.model';
import { createReducer } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState: AuthenticationState = {
  account: undefined,
  signInModalIsOpen: false,
};

export const authenticationReducer = createReducer<AuthenticationState>(initialState, (builder) =>
  builder.addCase(signInModalIsOpenSetAction, (state, action) => {
    state.signInModalIsOpen = action.payload;
  }),
);

export const useSignInModalIsOpen = () =>
  useSelector<RootState, boolean>((state) => state[AUTHENTICATION].signInModalIsOpen);

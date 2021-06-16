import { createAsyncThunk } from '@reduxjs/toolkit';
import { SIGNIN } from '@lib/common/authentication/constants';
import { SignInRequestModel } from '@lib/common/authentication/models';
import { accountSetAction } from '@lib/frontend/account/actions/account/account.action';
import { _signInWithToken } from '@lib/frontend/authentication/actions/signIn/internal/_signIn';
import { authenticationClient } from '@lib/frontend/authentication/clients/AuthenticationClient/AuthenticationClient';

export const signInAction = createAsyncThunk<any, SignInRequestModel>(
  SIGNIN,
  async (data, { dispatch, rejectWithValue }) =>
    authenticationClient
      .signIn(data)
      .then(({ account, token }) => {
        _signInWithToken(token);
        return dispatch(accountSetAction(account));
      })
      .catch((e) => rejectWithValue(e.data)),
);

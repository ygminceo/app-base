import { createAsyncThunk } from '@reduxjs/toolkit';
import { SIGNIN } from '@lib/common/authentication/constants';
import { SignInRequestModel } from '@lib/common/authentication/models';
import { _signInWithToken } from '@lib/frontend/authentication/actions/signIn/internal/_signIn';
import { authenticationClient } from '@lib/frontend/authentication/clients/AuthenticationClient/AuthenticationClient';
import { userSetAction } from '@lib/frontend/user/actions/user/user.action';

export const signInAction = createAsyncThunk<any, SignInRequestModel>(
  SIGNIN,
  async (data, { dispatch, rejectWithValue }) =>
    authenticationClient
      .signIn(data)
      .then(({ user, token }) => {
        _signInWithToken(token);
        return dispatch(userSetAction(user));
      })
      .catch((e) => rejectWithValue(e.data)),
);

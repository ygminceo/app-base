import { createAsyncThunk } from '@reduxjs/toolkit';
import { SIGNOUT } from '@lib/common/authentication/constants';
import { accountSetAction } from '@lib/frontend/account/actions/account/account.action';
import { _signOut } from '@lib/frontend/authentication/actions/signOut/internal/_signOut';

export const signOutAction = createAsyncThunk<any, void>(
  SIGNOUT,
  async (_data, { dispatch, rejectWithValue }) =>
    _signOut()
      .then(() => dispatch(accountSetAction(null)))
      .catch((e) => rejectWithValue(e.data)),
);

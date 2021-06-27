import { createAsyncThunk } from '@reduxjs/toolkit';
import { SIGNOUT } from '@lib/common/authentication/constants';
import { _signOut } from '@lib/frontend/authentication/actions/signOut/internal/_signOut';
import { userSetAction } from '@lib/frontend/user/actions/user/user.action';

export const signOutAction = createAsyncThunk<any, void>(
  SIGNOUT,
  async (_data, { dispatch, rejectWithValue }) =>
    _signOut()
      .then(() => dispatch(userSetAction(null)))
      .catch((e) => rejectWithValue(e.data)),
);

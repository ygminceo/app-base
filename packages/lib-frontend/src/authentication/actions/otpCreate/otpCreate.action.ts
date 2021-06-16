import { createAsyncThunk } from '@reduxjs/toolkit';
import { OTP_CREATE } from '@lib/common/authentication/constants';
import { OtpCreateRequestModel } from '@lib/common/authentication/models';
import { authenticationClient } from '@lib/frontend/authentication/clients/AuthenticationClient/AuthenticationClient';

export const otpCreateAction = createAsyncThunk<any, OtpCreateRequestModel>(
  OTP_CREATE,
  async (data, { rejectWithValue }) =>
    authenticationClient.otpCreate(data).catch((e) => rejectWithValue(e.data)),
);

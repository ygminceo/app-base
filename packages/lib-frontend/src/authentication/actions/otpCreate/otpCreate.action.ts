import { OTP_CREATE } from '@lib/common/authentication/constants';
import { OtpCreateRequest } from '@lib/common/authentication/models';
import { authenticationClient } from '@lib/frontend/authentication/clients/AuthenticationClient/AuthenticationClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const otpCreateAction = createAsyncThunk<any, OtpCreateRequest>(
  OTP_CREATE,
  async (data, { rejectWithValue }) =>
    authenticationClient.otpCreate(data).catch((e) => rejectWithValue(e.data)),
);

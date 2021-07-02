import { createAsyncThunk } from '@reduxjs/toolkit';
import { BANK_ADD } from '@lib/common/billing/constants';
import { BankAddRequestModel } from '@lib/common/billing/models';
import { billingClient } from '@lib/frontend/billing/clients/BillingClient/BillingClient';

export const bankAddAction = createAsyncThunk<void, BankAddRequestModel>(
  BANK_ADD,
  async (data, { rejectWithValue }) =>
    billingClient.bankAdd(data).catch((e) => rejectWithValue(e.data)),
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { BANK_ADD, BANK_LINK_TOKEN_CREATE } from '@lib/common/billing/constants';
import { BankAddRequestModel, BankLinkTokenCreateResponseModel } from '@lib/common/billing/models';
import { billingClient } from '@lib/frontend/billing/clients/BillingClient/BillingClient';

export const bankLinkTokenCreateAction = createAsyncThunk<BankLinkTokenCreateResponseModel, void>(
  BANK_LINK_TOKEN_CREATE,
  async (data, { rejectWithValue }) =>
    billingClient.bankLinkTokenCreate().catch((e) => rejectWithValue(e.data)),
);

export const bankAddAction = createAsyncThunk<void, BankAddRequestModel>(
  BANK_ADD,
  async (data, { rejectWithValue }) =>
    billingClient.bankAdd(data).catch((e) => rejectWithValue(e.data)),
);

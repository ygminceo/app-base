import { createAsyncThunk } from '@reduxjs/toolkit';
import { BANK_ACCOUNT_ADD, BANK_LINK_TOKEN_CREATE } from '@lib/common/billing/constants';
import {
  BankAccountAddRequestModel,
  BankLinkTokenCreateRequestModel,
  BankLinkTokenCreateResponseModel,
} from '@lib/common/billing/models';
import { billingClient } from '@lib/frontend/billing/clients/BillingClient/BillingClient';

export const bankLinkTokenCreateAction = createAsyncThunk<
  BankLinkTokenCreateResponseModel,
  BankLinkTokenCreateRequestModel
>(BANK_LINK_TOKEN_CREATE, async (data, { rejectWithValue }) =>
  billingClient.bankLinkTokenCreate(data).catch((e) => rejectWithValue(e.data)),
);

export const bankAccountAddAction = createAsyncThunk<void, BankAccountAddRequestModel>(
  BANK_ACCOUNT_ADD,
  async (data, { rejectWithValue }) =>
    billingClient.bankAccountAdd(data).catch((e) => rejectWithValue(e.data)),
);

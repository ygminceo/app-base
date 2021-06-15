import { BANK_ACCOUNT_ADD, BANK_TOKEN_LINK_CREATE } from '@lib/common/payment/constants';
import {
  BankAccountAddRequestModel,
  BankTokenLinkCreateRequestModel,
  BankTokenLinkCreateResponseModel,
} from '@lib/common/payment/models';
import { paymentClient } from '@lib/frontend/payment/clients/PaymentClient/PaymentClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const bankTokenLinkCreateAction = createAsyncThunk<
  BankTokenLinkCreateResponseModel,
  BankTokenLinkCreateRequestModel
>(BANK_TOKEN_LINK_CREATE, async (data, { rejectWithValue }) =>
  paymentClient.bankTokenLinkCreate(data).catch((e) => rejectWithValue(e.data)),
);

export const bankAccountAddAction = createAsyncThunk<void, BankAccountAddRequestModel>(
  BANK_ACCOUNT_ADD,
  async (data, { rejectWithValue }) =>
    paymentClient.bankAccountAdd(data).catch((e) => rejectWithValue(e.data)),
);

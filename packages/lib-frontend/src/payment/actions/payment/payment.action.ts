import { BANK_ACCOUNT_ADD, BANK_TOKEN_LINK_CREATE } from '@lib/common/payment/constants';
import {
  BankAccountAddRequest,
  BankTokenLinkCreateRequest,
  BankTokenLinkCreateResponse,
} from '@lib/common/payment/models';
import { paymentClient } from '@lib/frontend/payment/clients/PaymentClient/PaymentClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const bankTokenLinkCreateAction = createAsyncThunk<
  BankTokenLinkCreateResponse,
  BankTokenLinkCreateRequest
>(BANK_TOKEN_LINK_CREATE, async (data, { rejectWithValue }) =>
  paymentClient.bankTokenLinkCreate(data).catch((e) => rejectWithValue(e.data)),
);

export const bankAccountAddAction = createAsyncThunk<void, BankAccountAddRequest>(
  BANK_ACCOUNT_ADD,
  async (data, { rejectWithValue }) =>
    paymentClient.bankAccountAdd(data).catch((e) => rejectWithValue(e.data)),
);

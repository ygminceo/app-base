import { createAsyncThunk } from '@reduxjs/toolkit';
import { CARD_ADD } from '@lib/common/billing/constants';
import { CardAddRequestModel, CardAddResponseModel } from '@lib/common/billing/models';
import { billingClient } from '@lib/frontend/billing/clients/BillingClient/BillingClient';

export const cardAddAction = createAsyncThunk<CardAddResponseModel, CardAddRequestModel>(
  CARD_ADD,
  async (data, { rejectWithValue }) =>
    billingClient.cardAdd(data).catch((e) => rejectWithValue(e.data)),
);

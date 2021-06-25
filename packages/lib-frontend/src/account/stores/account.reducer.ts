import { createReducer } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { ACCOUNT } from '@lib/common/account/constants';
import { AccountSummaryModel } from '@lib/common/account/models';
import { accountSetAction } from '@lib/frontend/account/actions/account/account.action';
import { AccountStateModel } from '@lib/frontend/account/stores/accountState.model';
import { RootStateModel } from '@lib/frontend/root/stores/rootState.model';

const initialState: AccountStateModel = {
  account: undefined,
};

export const accountReducer = createReducer<AccountStateModel>(initialState, (builder) =>
  builder.addCase(accountSetAction, (state, action) => {
    state.account = action.payload;
  }),
);

export const useAccount = () =>
  useSelector<RootStateModel, AccountSummaryModel | undefined | null>(
    (state) => state[ACCOUNT].account,
  );

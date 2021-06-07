import { accountSetAction } from '@lib/frontend/account/actions/account/account.action';
import { AccountState } from '@lib/frontend/account/stores/accountState.model';
import { RootState } from '@lib/frontend/root/stores/rootState.model';
import { ACCOUNT } from '@lib/common/account/constants';
import { AccountClassSummary } from '@lib/common/account/models';
import { createReducer } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState: AccountState = {
  account: undefined,
};

export const accountReducer = createReducer<AccountState>(initialState, (builder) =>
  builder.addCase(accountSetAction, (state, action) => {
    state.account = action.payload;
  }),
);

export const useAccount = () =>
  useSelector<RootState, AccountClassSummary | undefined | null>((state) => state[ACCOUNT].account);

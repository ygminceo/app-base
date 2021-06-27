import { createReducer } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { USER } from '@lib/common/user/constants';
import { UserSummaryModel } from '@lib/common/user/models';
import { RootStateModel } from '@lib/frontend/root/stores/rootState.model';
import { userSetAction } from '@lib/frontend/user/actions/user/user.action';
import { UserStateModel } from '@lib/frontend/user/stores/userState.model';

const initialState: UserStateModel = {
  user: undefined,
};

export const userReducer = createReducer<UserStateModel>(initialState, (builder) =>
  builder.addCase(userSetAction, (state, action) => {
    state.user = action.payload;
  }),
);

export const useUser = () =>
  useSelector<RootStateModel, UserSummaryModel | undefined | null>((state) => state[USER].user);

import { createReducer } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { DASHBOARD } from '@lib/common/dashboard/constants';
import { DashboardStateModel } from '@lib/frontend/dashboard/stores/dashboardState.model';
import { RootStateModel } from '@lib/frontend/root/stores/rootState.model';
import { isTestModeSet } from './../actions/dashboard/dashboard.action';

const initialState: DashboardStateModel = {
  isTestMode: false,
};

export const dashboardReducer = createReducer<DashboardStateModel>(initialState, (builder) =>
  builder.addCase(isTestModeSet, (state, action) => {
    state.isTestMode = action.payload;
  }),
);

export const useIsTestMode = () =>
  useSelector<RootStateModel, boolean>((state) => state[DASHBOARD].isTestMode);

import { createReducer } from '@reduxjs/toolkit';
import { filter } from 'lodash';
import { useSelector } from 'react-redux';
import { APP } from '@lib/common/app/constants';
import { alertAdd, alertDelete } from '@lib/frontend/app/actions/alert/alert.action';
import { AppStateModel } from '@lib/frontend/app/stores/appState.model';
import { AlertModel } from '@lib/frontend/core/components/Alert/Alert.model';
import { RootStateModel } from '@lib/frontend/root/stores/rootState.model';

const initialState: AppStateModel = {
  alerts: [],
};

export const appReducer = createReducer<AppStateModel>(initialState, (builder) =>
  builder
    .addCase(alertAdd, (state, action) => {
      state.alerts.push(action.payload);
    })
    .addCase(alertDelete, (state, action) => {
      state.alerts = filter(state.alerts, (alert) => alert.id !== action.payload);
    }),
);

export const useAlerts = () =>
  useSelector<RootStateModel, AlertModel[]>((state) => state[APP].alerts);

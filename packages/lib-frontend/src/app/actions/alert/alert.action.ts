import { createAction } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';
import { APP } from '@lib/common/app/constants';
import { AlertModel } from '@lib/frontend/core/components/Alert/Alert.model';

export const alertAdd = createAction(`${APP}/ALERT_ADD`, (payload: Omit<AlertModel, 'id'>) => ({
  payload: { ...payload, id: uniqueId() },
}));

export const alertDelete = createAction<string>(`${APP}/ALERT_DELETE`);

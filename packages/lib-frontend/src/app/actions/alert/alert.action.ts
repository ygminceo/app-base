import { createAction } from '@reduxjs/toolkit';
import { APP } from '@lib/common/app/constants';
import { GUID } from '@lib/common/core/utils/GUID/GUID';
import { AlertMessageModel } from '@lib/frontend/core/components/Alert/Alert.model';

export const alertAdd = createAction(`${APP}/ALERT_ADD`, (payload: AlertMessageModel) => ({
  payload: { ...payload, id: GUID.v4() },
}));

export const alertDelete = createAction<string>(`${APP}/ALERT_DELETE`);

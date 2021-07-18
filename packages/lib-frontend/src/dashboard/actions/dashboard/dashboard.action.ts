import { createAction } from '@reduxjs/toolkit';
import { DASHBOARD } from '@lib/common/dashboard/constants';

export const isTestModeSet = createAction<boolean>(`${DASHBOARD}/IS_TEST_MODE_SET`);

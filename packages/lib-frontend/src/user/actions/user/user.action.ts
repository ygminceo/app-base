import { createAction } from '@reduxjs/toolkit';
import { USER } from '@lib/common/user/constants';
import { UserSummaryModel } from '@lib/common/user/models';

export const userSetAction = createAction<UserSummaryModel | null>(`${USER}/USER_SET`);

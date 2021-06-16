import { createAction } from '@reduxjs/toolkit';
import { ACCOUNT } from '@lib/common/account/constants';
import { AccountSummaryModel } from '@lib/common/account/models';

export const accountSetAction = createAction<AccountSummaryModel | null>(`${ACCOUNT}/ACCOUNT_SET`);

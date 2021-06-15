import { ACCOUNT } from '@lib/common/account/constants';
import { AccountSummaryModel } from '@lib/common/account/models';
import { createAction } from '@reduxjs/toolkit';

export const accountSetAction = createAction<AccountSummaryModel | null>(`${ACCOUNT}/ACCOUNT_SET`);

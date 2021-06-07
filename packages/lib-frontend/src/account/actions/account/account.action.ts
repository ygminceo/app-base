import { ACCOUNT } from '@lib/common/account/constants';
import { AccountClassSummary } from '@lib/common/account/models';
import { createAction } from '@reduxjs/toolkit';

export const accountSetAction = createAction<AccountClassSummary | null>(`${ACCOUNT}/ACCOUNT_SET`);

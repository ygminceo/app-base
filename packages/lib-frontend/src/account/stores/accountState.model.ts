import { AccountClassSummary } from '@lib/common/account/models';

export interface AccountState {
  account?: AccountClassSummary | null;
}

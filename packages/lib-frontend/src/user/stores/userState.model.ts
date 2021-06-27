import { UserSummaryModel } from '@lib/common/user/models';

export interface UserStateModel {
  user?: UserSummaryModel | null;
}

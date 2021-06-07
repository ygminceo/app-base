import { CollectionClass } from '@lib/backend/utils/Database/Database.model';
import { AccountClass, AccountGetRequest } from '@lib/common/account/models';

export type accountGetFunction = (props: {
  data: AccountGetRequest;
  accountCollection: CollectionClass;
  select?: (keyof AccountClass)[];
}) => Promise<AccountClass>;

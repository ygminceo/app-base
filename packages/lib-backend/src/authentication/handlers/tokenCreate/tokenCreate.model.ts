import { AccountClass } from '@lib/common/account/models';

export type tokenCreateFunction = (account: AccountClass) => Promise<string>;

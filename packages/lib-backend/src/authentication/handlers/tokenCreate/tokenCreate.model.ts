import { AccountModel } from '@lib/common/account/models';

export type TokenCreateHandlerModel = (account: AccountModel) => Promise<string>;

import { AccountModel } from '@lib/common/account/models';

export interface AuthenticationStateModel {
  account?: AccountModel;
  signInModalIsOpen: boolean;
}

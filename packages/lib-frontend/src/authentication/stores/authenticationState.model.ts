import { AccountClass } from '@lib/common/account/models';

export interface AuthenticationState {
  account?: AccountClass;
  signInModalIsOpen: boolean;
}

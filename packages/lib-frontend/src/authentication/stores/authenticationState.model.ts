import { UserModel } from '@lib/common/user/models';

export interface AuthenticationStateModel {
  user?: UserModel;
  signInModalIsOpen: boolean;
}

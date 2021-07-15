import { UserModel } from '@lib/common/user/models';

export interface SettingsPageProps {}

export interface SettingsItemModel {
  label?: string;
  icon?: string;
  value(user: UserModel): string | undefined;
}

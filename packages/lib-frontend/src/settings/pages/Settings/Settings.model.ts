import { UserModel } from '@lib/common/user/models';

export interface SettingsPageProps {}

export interface SettingsItemModel {
  title?: string;
  icon?: string;
  value(user: UserModel): string | undefined;
}

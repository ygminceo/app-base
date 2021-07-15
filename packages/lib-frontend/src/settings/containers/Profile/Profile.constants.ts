import { UserModel } from '@lib/common/user/models';
import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';
import { SettingsItemModel } from '@lib/frontend/settings/pages/Settings/Settings.model';

export const PROFILE_SETTINGS_OPTIONS: SettingsItemModel[] = [
  {
    label: tLazy('common:labels.email'),
    icon: 'email',
    value: (user: UserModel) => user && user.email,
  },
  {
    label: tLazy('common:labels.phoneNumber'),
    icon: 'phone',
    value: (user: UserModel) => user && user.phoneNumber,
  },
];

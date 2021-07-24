import React from 'react';
import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { BILLING } from '@lib/common/billing/constants';
import { SETTINGS } from '@lib/common/settings/constants';
import { DASHBOARD_HEADER_MENU_OPTIONS } from '@lib/frontend/app/layouts/DashboardLayout/DashboardHeader/DashboardHeaderMenu/DashboardHeaderMenu.constants';
import { DashboardHeaderMenuProps } from '@lib/frontend/app/layouts/DashboardLayout/DashboardHeader/DashboardHeaderMenu/DashboardHeaderMenu.model';
import { Icon, Menu, Pressable } from '@lib/frontend/core/components';
import { SelectableOptionModel } from '@lib/frontend/core/components/SelectField/SelectField.model';
import { useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const DashboardHeaderMenu = ({ ...props }: DashboardHeaderMenuProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation([AUTHENTICATION, BILLING, SETTINGS]);
  return (
    <Menu
      trackable={{ object: 'DashboardHeaderMenu' }}
      style={styles}
      options={DASHBOARD_HEADER_MENU_OPTIONS.map((option) => ({
        ...option,
        label: (option as SelectableOptionModel).label
          ? t((option as SelectableOptionModel).label || '')
          : undefined,
      }))}
      anchor={(open) => (
        <Pressable isPressed={open}>
          <Icon icon="user-circle" large />
        </Pressable>
      )}
    />
  );
};

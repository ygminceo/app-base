import { APP_HEADER_MENU_OPTIONS } from '@lib/frontend/app/containers/AppHeaderMenu/AppHeaderMenu.constants';
import { AppHeaderMenuProps } from '@lib/frontend/app/containers/AppHeaderMenu/AppHeaderMenu.model';
import { IconMenu } from '@lib/frontend/core/components';
import { SelectableOption } from '@lib/frontend/core/components/SelectField/SelectField.model';
import { useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';
import React from 'react';

export const AppHeaderMenu = ({ ...props }: AppHeaderMenuProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation(['account', 'authentication']);
  return (
    <IconMenu
      style={styles}
      icon="menu"
      options={APP_HEADER_MENU_OPTIONS.map((option) => ({
        ...option,
        label: (option as SelectableOption).label
          ? t((option as SelectableOption).label || '')
          : undefined,
      }))}
    />
  );
};

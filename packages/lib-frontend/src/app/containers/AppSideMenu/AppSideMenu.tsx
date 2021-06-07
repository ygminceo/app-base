import {
  APP_SIDE_MENU_ID,
  APP_SIDE_MENU_OPTIONS,
} from '@lib/frontend/app/containers/AppSideMenu/AppSideMenu.constants';
import { AppSideMenuProps } from '@lib/frontend/app/containers/AppSideMenu/AppSideMenu.model';
import { getAppSideMenuStyle } from '@lib/frontend/app/containers/AppSideMenu/AppSideMenu.style';
import { Divider, Icon, Text, Wrapper } from '@lib/frontend/core/components';
import { DividerOption } from '@lib/frontend/core/components/Menu/Menu.model';
import { SelectableOption } from '@lib/frontend/core/components/SelectField/SelectField.model';
import { useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';
import React from 'react';

export const AppSideMenu = ({ ...props }: AppSideMenuProps) => {
  const { styles } = useStyles(props, [getAppSideMenuStyle]);
  const { t } = useTranslation(['account', 'authentication']);
  return (
    <Wrapper nativeID={APP_SIDE_MENU_ID} style={styles} p spacing>
      {APP_SIDE_MENU_OPTIONS.map((option, i) =>
        (option as DividerOption).divider ? (
          <Divider key={i} />
        ) : (
          <Wrapper key={i} row alignCenter spacingTight>
            {(option as SelectableOption).icon && (
              <Icon icon={(option as SelectableOption).icon as string} />
            )}
            <Text>{t((option as SelectableOption).label as string)}</Text>
          </Wrapper>
        ),
      )}
    </Wrapper>
  );
};

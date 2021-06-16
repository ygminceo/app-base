import React from 'react';
import {
  APP_SIDE_MENU_ID,
  APP_SIDE_MENU_OPTIONS,
} from '@lib/frontend/app/containers/AppSideMenu/AppSideMenu.constants';
import { AppSideMenuProps } from '@lib/frontend/app/containers/AppSideMenu/AppSideMenu.model';
import { getAppSideMenuStyle } from '@lib/frontend/app/containers/AppSideMenu/AppSideMenu.style';
import { Divider, Icon, Text, Wrapper } from '@lib/frontend/core/components';
import { DividerOptionModel } from '@lib/frontend/core/components/Menu/Menu.model';
import { SelectableOptionModel } from '@lib/frontend/core/components/SelectField/SelectField.model';
import { useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const AppSideMenu = ({ ...props }: AppSideMenuProps) => {
  const { styles } = useStyles(props, [getAppSideMenuStyle]);
  const { t } = useTranslation(['account', 'authentication']);
  return (
    <Wrapper nativeID={APP_SIDE_MENU_ID} style={styles} p spacing>
      {APP_SIDE_MENU_OPTIONS.map((option, i) =>
        (option as DividerOptionModel).divider ? (
          <Divider key={i} />
        ) : (
          <Wrapper key={i} row alignCenter spacingTight>
            {(option as SelectableOptionModel).icon && (
              <Icon icon={(option as SelectableOptionModel).icon as string} />
            )}
            <Text>{t((option as SelectableOptionModel).label as string)}</Text>
          </Wrapper>
        ),
      )}
    </Wrapper>
  );
};

import { find } from 'lodash';
import React, { useMemo } from 'react';
import { DroppableMenu, IconText } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import {
  LOCALE_SWITCH_MENU_OPTIONS,
  LOCALE_SWITCH_MENU_WIDTH,
} from '@lib/frontend/locale/containers/LocaleSwitch/LocaleSwitch.constants';
import { LocaleSwitchProps } from '@lib/frontend/locale/containers/LocaleSwitch/LocaleSwitch.model';
import { useLocale } from '@lib/frontend/locale/hooks';

export const LocaleSwitch = ({ ...props }: LocaleSwitchProps) => {
  const { styles } = useStyles(props);
  const { currentLocale, onLocaleChange } = useLocale();

  const currentOption = useMemo(
    () => find(LOCALE_SWITCH_MENU_OPTIONS, (option) => option.value === currentLocale),
    [currentLocale],
  );

  return (
    <DroppableMenu
      width={LOCALE_SWITCH_MENU_WIDTH}
      value={currentLocale}
      style={styles}
      searchable
      options={LOCALE_SWITCH_MENU_OPTIONS.map((option) => ({
        ...option,
        onPress: () => onLocaleChange(option.value),
      }))}>
      <IconText icon="globe">{currentOption && currentOption.label}</IconText>
    </DroppableMenu>
  );
};

import React from 'react';
import { useDispatch } from 'react-redux';
import { SwitchField } from '@lib/frontend/core/components';
import { AppDispatchModel } from '@lib/frontend/root/stores/store';
import { themeSetAction } from '@lib/frontend/theme/actions/theme.action';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';
import { DarkTheme } from '@lib/frontend/theme/themes/dark.theme';
import { LightTheme } from '@lib/frontend/theme/themes/light.theme';

export const ThemeSwitch = ({ ...props }) => {
  const dispatch = useDispatch<AppDispatchModel>();
  const isDark = useTheme<boolean>('isDark');
  return (
    <SwitchField
      {...props}
      activeIcon="dark"
      inactiveIncon="light"
      value={isDark}
      onChange={(value) => dispatch(themeSetAction(value ? DarkTheme : LightTheme))}
    />
  );
};

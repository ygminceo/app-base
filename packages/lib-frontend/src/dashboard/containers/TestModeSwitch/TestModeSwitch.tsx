import React from 'react';
import { useDispatch } from 'react-redux';
import { SwitchField } from '@lib/frontend/core/components';
import { isTestModeSet } from '@lib/frontend/dashboard/actions/dashboard/dashboard.action';
import { TestModeSwitchProps } from '@lib/frontend/dashboard/containers/TestModeSwitch/TestModeSwitch.model';
import { useIsTestMode } from '@lib/frontend/dashboard/stores/dashboard.reducer';
import { AppDispatchModel } from '@lib/frontend/root/stores/store';

export const TestModeSwitch = ({ ...props }: TestModeSwitchProps) => {
  const dispatch = useDispatch<AppDispatchModel>();
  const isTestMode = useIsTestMode();
  return (
    <SwitchField
      {...props}
      value={isTestMode}
      onChange={(value) => dispatch(isTestModeSet(value))}
    />
  );
};

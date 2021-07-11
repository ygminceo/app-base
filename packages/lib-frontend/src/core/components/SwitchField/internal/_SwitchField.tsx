import React from 'react';
import { Switch } from 'react-native-switch';
import { Icon } from '@lib/frontend/core/components';
import { _SwitchFieldProps } from '@lib/frontend/core/components/SwitchField/internal/_SwitchField.model';
import { useStyles } from '@lib/frontend/core/hooks';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

export const _SwitchField = ({
  value,
  onChange,
  isDisabled,
  activeIcon,
  inactiveIncon,
  ...props
}: _SwitchFieldProps) => {
  const { styles } = useStyles(props);
  const colorPrimary = useTheme<string>('colors.primary.main');
  const colorMuted = useTheme<string>('colors.border');
  return (
    <Switch
      containerStyle={styles}
      value={value}
      circleBorderWidth={2}
      circleSize={30}
      onValueChange={onChange}
      disabled={isDisabled}
      backgroundActive={colorPrimary}
      backgroundInactive={colorMuted}
      renderActiveText={false}
      renderInActiveText={false}
      changeValueImmediately
      innerCircleStyle={{
        borderColor: value ? colorPrimary : colorMuted,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      renderInsideCircle={() => (
        <Icon
          icon={value ? activeIcon || 'check' : inactiveIncon || 'times'}
          color={value ? colorPrimary : colorMuted}
        />
      )}
    />
  );
};

import React, { useCallback } from 'react';
import { Icon, Loading, Pressable, Text, Wrapper } from '@lib/frontend/core/components';
import { ButtonProps } from '@lib/frontend/core/components/Button/Button.model';
import { getButtonStyle } from '@lib/frontend/core/components/Button/Button.style';
import { useStyles, useUncontrolled } from '@lib/frontend/core/hooks';
import { promisify } from '@lib/frontend/core/utils/promisify/promisify';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

export const Button = ({
  children,
  confirmMessage,
  isDisabled,
  error,
  icon,
  isLoading,
  onPress,
  isPressed,
  small,
  success,
  transparent,
  fullWidth,
  ...props
}: ButtonProps) => {
  const { styles } = useStyles({ small, transparent, fullWidth, ...props }, [getButtonStyle]);
  const [isLoadingState, setLoadingState] = useUncontrolled<boolean>(isLoading, undefined, false);

  const blocked = isDisabled || isLoadingState;

  const theme = success ? 'success' : error ? 'error' : 'primary';
  const backgroundColor = useTheme<string>('colors.background.primary');
  const lightColor = useTheme<string>(`colors.${theme}.light`);
  const mainColor = useTheme<string>(`colors.${theme}.main`);
  const darkColor = useTheme<string>(`colors.${theme}.dark`);

  const from = {
    backgroundColor: transparent
      ? backgroundColor
      : transparent
      ? 'transparent'
      : blocked
      ? lightColor
      : mainColor,
  };

  const to = {
    backgroundColor: transparent || blocked ? lightColor : darkColor,
  };

  const handlePress = useCallback(() => {
    setLoadingState(true);
    promisify(onPress)().then(() => setLoadingState(false));
  }, [onPress]);

  return (
    <Pressable
      style={styles}
      confirmMessage={confirmMessage}
      isPressed={isPressed}
      onPress={handlePress}
      isDisabled={blocked}
      from={from}
      to={to}>
      <Wrapper grow row center alignCenter pLeft pRight relative opaque={isLoadingState}>
        {icon && (
          <Icon
            icon={icon}
            white={!transparent}
            primary={transparent}
            small={small}
            mRightTight
            mLeft={fullWidth}
            absoluteLeft={fullWidth}
            center
          />
        )}
        {children && (
          <Text capitalize white={!transparent} primary={transparent} small={small}>
            {children}
          </Text>
        )}
      </Wrapper>

      {isLoadingState && (
        <Wrapper absoluteFill center alignCenter>
          <Loading large={!small} />
        </Wrapper>
      )}
    </Pressable>
  );
};

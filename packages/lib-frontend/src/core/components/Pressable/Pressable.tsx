import { isFunction } from 'lodash';
import React, { useState } from 'react';
import { COMMON } from '@lib/common/core/constants';
import { Activatable, Button, Modal, Text, Wrapper } from '@lib/frontend/core/components';
import { PressableProps } from '@lib/frontend/core/components/Pressable/Pressable.model';
import { useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';

export const Pressable = ({
  isDisabled,
  confirmMessage,
  onPress,
  onPressIn,
  onPressOut,
  isPressed,
  from: fromProps,
  to: toProps,
  center,
  children,
  ...props
}: PressableProps) => {
  const { t } = useTranslation([COMMON]);
  const { styles } = useStyles(props);
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState<boolean>(false);

  const isDark = useTheme<boolean>('isDark');

  const backgroundMain = useTheme<string>('colors.background.main');
  const from = { backgroundColor: backgroundMain, ...fromProps };
  const to = isDisabled
    ? from
    : {
        backgroundColor: isDark
          ? CommonTheme.colors.primary.dark
          : CommonTheme.colors.primary.light,
        ...toProps,
      };

  return (
    <>
      <Activatable>
        {(isActive) => (
          <Wrapper
            animatable={{ transition: ['backgroundColor'] }}
            style={[styles, !isDisabled && (isActive || isPressed) ? to : from]}
            pLeft
            pRight
            pTopTight
            pBottomTight
            round
            center
            alignCenter={center}
            onPress={
              isDisabled ? undefined : confirmMessage ? () => setConfirmModalIsOpen(true) : onPress
            }
            onPressIn={onPressIn}
            onPressOut={onPressOut}>
            {isFunction(children) ? children(isActive || isPressed) : children}
          </Wrapper>
        )}
      </Activatable>
      <Modal isOpen={confirmModalIsOpen} onClose={() => setConfirmModalIsOpen(false)}>
        <Wrapper spacing>
          {confirmMessage && <Text>{confirmMessage}</Text>}
          <Wrapper row spacing>
            <Button
              transparent
              isDisabled={isDisabled}
              onPress={() => setConfirmModalIsOpen(false)}>
              {t('common:labels.cancel')}
            </Button>
            <Button isDisabled={isDisabled} onPress={onPress}>
              {t('common:labels.continue')}
            </Button>
          </Wrapper>
        </Wrapper>
      </Modal>
    </>
  );
};

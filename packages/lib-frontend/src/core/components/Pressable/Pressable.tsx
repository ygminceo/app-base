import React, { useState } from 'react';
import { Button, Hoverable, Modal, Text, Wrapper } from '@lib/frontend/core/components';
import { PressableProps } from '@lib/frontend/core/components/Pressable/Pressable.model';
import { getPressableStyle } from '@lib/frontend/core/components/Pressable/Pressable.style';
import { useStyles, useUncontrolled } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

export const Pressable = ({
  isDisabled,
  confirmMessage,
  onPress,
  isPressed,
  from: fromProps,
  to: toProps,
  children,
  ...props
}: PressableProps) => {
  const { t } = useTranslation(['common']);
  const { styles } = useStyles({ from: fromProps, to: toProps, ...props }, [getPressableStyle]);
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState<boolean>(false);
  const [isPressedState, setPressedState] = useUncontrolled(isPressed, undefined, false);

  const isDark = useTheme<boolean>('isDark');
  const c = isDark ? 255 : 0;
  const from = { backgroundColor: `rgba(${c}, ${c}, ${c}, 0)`, ...fromProps };
  const to = { backgroundColor: `rgba(${c}, ${c}, ${c}, 0.1)`, ...toProps };

  return (
    <>
      <Hoverable>
        {(isHovered) => (
          <Wrapper
            animatable={{
              transition: ['backgroundColor'],
            }}
            style={[styles, !isDisabled && (isPressedState || isHovered) ? to : from]}
            round
            center
            onPress={
              isDisabled ? undefined : confirmMessage ? () => setConfirmModalIsOpen(true) : onPress
            }
            onPressIn={isDisabled ? undefined : () => setPressedState(true)}
            onPressOut={isDisabled ? undefined : () => setPressedState(false)}>
            {children}
          </Wrapper>
        )}
      </Hoverable>
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

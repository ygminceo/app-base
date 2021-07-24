import { isFunction } from 'lodash';
import React, { useState } from 'react';
import { ANALYTICS_ACTION_PRESS } from '@lib/common/analytics/constants';
import { COMMON } from '@lib/common/core/constants';
import { useAnalytics } from '@lib/frontend/analytics/hooks';
import { Activatable, Button, Modal, Text, Wrapper } from '@lib/frontend/core/components';
import { PressableProps } from '@lib/frontend/core/components/Pressable/Pressable.model';
import { useViewStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

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
  trackable,
  ...props
}: PressableProps) => {
  const { t } = useTranslation([COMMON]);
  const analytics = useAnalytics();
  const { styles } = useViewStyles(props);
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState<boolean>(false);

  const isDark = useTheme<boolean>('isDark');
  const c = isDark ? 255 : 0;
  const from = { backgroundColor: `rgba(${c}, ${c}, ${c}, 0)`, ...fromProps };
  const to = { backgroundColor: `rgba(${c}, ${c}, ${c}, 0.1)`, ...toProps };

  const onPressTrackable = trackable
    ? () => {
        analytics.track({ ...trackable, action: ANALYTICS_ACTION_PRESS });
        onPress && onPress();
      }
    : onPress;

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
              isDisabled
                ? undefined
                : confirmMessage
                ? () => setConfirmModalIsOpen(true)
                : onPressTrackable
            }
            onPressIn={onPressIn}
            onPressOut={onPressOut}>
            {isFunction(children) ? children(isActive || isPressed) : children}
          </Wrapper>
        )}
      </Activatable>
      {/* TODO: track pressable modal */}
      {/* Modal */}
      {confirmMessage && (
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
      )}
    </>
  );
};

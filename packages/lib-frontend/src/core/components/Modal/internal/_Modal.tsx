import { _ModalProps } from '@lib/frontend/core/components/Modal/internal/_Modal.model';
import { useDimension, useIsMobile } from '@lib/frontend/core/hooks';
import { flexStyle } from '@lib/frontend/core/styles/flex.style';
import { spacingStyle } from '@lib/frontend/core/styles/spacing.style';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';
import React from 'react';
import Modal from 'react-native-modal';

export const _Modal = ({
  backdrop,
  closeOnBackdropPress,
  isDisabled,
  isFullSize,
  height,
  onClose,
  isOpen,
  width,
  children,
}: _ModalProps) => {
  const mobile = useIsMobile();
  const duration = useTheme<number>('animation.duration');
  const { width: deviceWidth, height: deviceHeight } = useDimension();

  return (
    <Modal
      isVisible={isOpen}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      supportedOrientations={['portrait', 'landscape']}
      animationIn={
        // @ts-ignore
        mobile ? 'slideInUp' : { from: { scale: 0.9, opacity: 0 }, to: { scale: 1, opacity: 1 } }
      }
      animationOut={
        // @ts-ignore
        mobile ? 'slideOutDown' : { from: { scale: 1, opacity: 1 }, to: { scale: 0.9, opacity: 0 } }
      }
      presentationStyle={isFullSize ? 'formSheet' : undefined}
      animationInTiming={duration}
      animationOutTiming={duration}
      backdropTransitionInTiming={duration}
      backdropTransitionOutTiming={duration}
      hideModalContentWhileAnimating
      hasBackdrop={backdrop}
      coverScreen={backdrop}
      backdropOpacity={backdrop ? 0.5 : 0}
      onBackdropPress={!isDisabled && closeOnBackdropPress ? onClose : undefined}
      // propagateSwipe
      onSwipeComplete={!isDisabled && mobile ? onClose : undefined}
      swipeDirection={!isDisabled && mobile ? 'down' : undefined}
      style={[
        spacingStyle.noMargin,
        ...(mobile ? [] : [spacingStyle.padding]),
        {
          width: isFullSize ? deviceWidth : width,
          height: isFullSize ? deviceHeight : height,
        },
        mobile ? flexStyle.end : flexStyle.alignCenter,
      ]}>
      {children}
    </Modal>
  );
};

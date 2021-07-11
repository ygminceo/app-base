import React from 'react';
import Modal from 'react-native-modal';
import { MODAL_SIZE_DEFAULT } from '@lib/frontend/core/components/Modal/Modal.constants';
import { _ModalProps } from '@lib/frontend/core/components/Modal/internal/_Modal.model';
import { useDimension, useIsMobile } from '@lib/frontend/core/hooks';
import { flexStyle } from '@lib/frontend/core/styles/flex.style';
import { spacingStyle } from '@lib/frontend/core/styles/spacing.style';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

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
  ...props
}: _ModalProps) => {
  const isMobile = useIsMobile();
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
        isMobile ? 'slideInUp' : { from: { scale: 0.9, opacity: 0 }, to: { scale: 1, opacity: 1 } }
      }
      animationOut={
        isMobile
          ? 'slideOutDown'
          : // @ts-ignore
            { from: { scale: 1, opacity: 1 }, to: { scale: 0.9, opacity: 0 } }
      }
      presentationStyle={isFullSize || isMobile ? 'formSheet' : undefined}
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
      onSwipeComplete={!isDisabled && isMobile ? onClose : undefined}
      swipeDirection={!isDisabled && isMobile ? 'down' : undefined}
      style={[
        spacingStyle.marginAuto,
        ...(isMobile ? [] : [spacingStyle.padding]),
        isMobile ? flexStyle.end : flexStyle.alignCenter,
        {
          width: isFullSize || isMobile ? deviceWidth : width || MODAL_SIZE_DEFAULT,
          height: isFullSize || isMobile ? deviceHeight : height || MODAL_SIZE_DEFAULT,
          maxHeight: isFullSize || isMobile ? deviceHeight : height || MODAL_SIZE_DEFAULT,
        },
      ]}>
      {children}
    </Modal>
  );
};

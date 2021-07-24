import { isString } from 'lodash';
import React from 'react';
import { ANALYTICS_ACTION_CLOSE, ANALYTICS_ACTION_OPEN } from '@lib/common/analytics/constants';
import { useAnalytics } from '@lib/frontend/analytics/hooks';
import { headerStyle } from '@lib/frontend/app/components/Header/Header.style';
import { Icon, Text, Wrapper } from '@lib/frontend/core/components';
import { KeyboardContainer } from '@lib/frontend/core/components/KeyboardContainer/KeyboardContainer';
import { ModalProps } from '@lib/frontend/core/components/Modal/Modal.model';
import { _Modal } from '@lib/frontend/core/components/Modal/internal/_Modal';
import { useChange } from '@lib/frontend/core/hooks';

export const Modal = ({
  children,
  isDisabled,
  onClose,
  isOpen,
  header,
  width,
  height,
  isFullSize,
  trackable,
}: ModalProps) => {
  const analytics = useAnalytics();

  useChange(isOpen, () => {
    trackable &&
      analytics.track({
        ...trackable,
        action: isOpen ? ANALYTICS_ACTION_OPEN : ANALYTICS_ACTION_CLOSE,
      });
  });

  return (
    <_Modal
      isOpen={isOpen}
      onClose={onClose}
      isDisabled={isDisabled}
      isFullSize={isFullSize}
      backdrop
      closeOnBackdropPress
      width={width}
      height={height}>
      <Wrapper grow fullWidth fill round shadow center>
        <KeyboardContainer>
          <Wrapper grow>
            {onClose && (
              <Wrapper style={[headerStyle.style]} row alignCenter pLeft pRight spacingTight>
                <Wrapper grow>
                  {isString(header) ? (
                    <Text title large>
                      {header}
                    </Text>
                  ) : (
                    header
                  )}
                </Wrapper>
                <Icon large onPress={onClose} icon="times" isDisabled={isDisabled} />
              </Wrapper>
            )}
            {/* Content */}
            <Wrapper grow pWide>
              {children}
            </Wrapper>
          </Wrapper>
        </KeyboardContainer>
      </Wrapper>
    </_Modal>
  );
};

import { isString } from 'lodash';
import React from 'react';
import { headerStyle } from '@lib/frontend/app/components/Header/Header.style';
import { Icon, Text, Wrapper } from '@lib/frontend/core/components';
import { KeyboardContainer } from '@lib/frontend/core/components/KeyboardContainer/KeyboardContainer';
import { ModalProps } from '@lib/frontend/core/components/Modal/Modal.model';
import { _Modal } from '@lib/frontend/core/components/Modal/internal/_Modal';

export const Modal = ({
  children,
  isDisabled,
  onClose,
  isOpen,
  header,
  width,
  height,
  isFullSize,
}: ModalProps) => (
  <_Modal
    isOpen={isOpen}
    onClose={onClose}
    isDisabled={isDisabled}
    isFullSize={isFullSize}
    backdrop
    closeOnBackdropPress
    width={width}
    height={height}>
    <Wrapper grow={isFullSize} fullWidth={isFullSize} fill round shadow>
      <KeyboardContainer>
        <Wrapper grow>
          {onClose && (
            <Wrapper
              style={[headerStyle.style]}
              row
              alignCenter
              borderBottom
              pLeft
              pRight
              spacingTight>
              <Icon large onPress={onClose} icon="arrow-left" isDisabled={isDisabled} />
              {isString(header) ? (
                <Text title large>
                  {header}
                </Text>
              ) : (
                header
              )}
            </Wrapper>
          )}
          {/* Content */}
          <Wrapper grow p>
            {children}
          </Wrapper>
        </Wrapper>
      </KeyboardContainer>
    </Wrapper>
  </_Modal>
);

import { KeyboardContainerProps } from '@lib/frontend/core/components/KeyboardContainer/KeyboardContainer.model';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';
import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

export const KeyboardContainer = ({ children }: KeyboardContainerProps) => (
  <KeyboardAvoidingView behavior={Platform.isIos ? 'padding' : 'height'} style={{ flexGrow: 1 }}>
    <TouchableWithoutFeedback style={{ flexGrow: 1 }} onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

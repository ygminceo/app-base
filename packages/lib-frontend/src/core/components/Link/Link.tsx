import React from 'react';
import { Linking } from 'react-native';
import { Activatable, Text, Wrapper } from '@lib/frontend/core/components';
import { LinkProps } from '@lib/frontend/core/components/Link/Link.model';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';

export const Link = ({ children, newTab, to, onPress, ...props }: LinkProps) => {
  const handlePress = () => {
    if (to) {
      if (Platform.isNative) {
        Linking.openURL(to);
      } else {
        window.open(to, newTab ? '_blank' : undefined);
      }
    }
    onPress && onPress();
  };

  return (
    <Activatable>
      {(isActive) => (
        <Wrapper>
          <Text
            {...props}
            primary
            dark={isActive}
            animatable={{ transition: ['color'] }}
            onPress={handlePress}>
            {children}
          </Text>
        </Wrapper>
      )}
    </Activatable>
  );
};

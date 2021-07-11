import React from 'react';
import { Bubble } from 'react-native-gifted-chat';
import { _BubbleProps } from '@lib/frontend/chat/components/Chat/internal/_Bubble.model';
import { Appearable } from '@lib/frontend/core/components';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';

export const _Bubble = (props: _BubbleProps) => {
  const colorMuted = useTheme<string>('colors.background.muted');
  return (
    <Appearable isVisible={props.isVisible}>
      <Bubble
        {...props}
        containerStyle={{
          left: { padding: 0, margin: 0 },
          right: { padding: 0, margin: 0 },
        }}
        wrapperStyle={{
          left: {
            borderRadius: CommonTheme.shape.borderRadius,
            padding: 8,
            margin: 0,
            backgroundColor: colorMuted,
          },
          right: {
            borderRadius: CommonTheme.shape.borderRadius,
            padding: 8,
            margin: 0,
            backgroundColor: CommonTheme.colors.primary.main,
          },
        }}
      />
    </Appearable>
  );
};

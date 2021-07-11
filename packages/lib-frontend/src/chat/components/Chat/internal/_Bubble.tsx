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
            margin: 0,
            borderRadius: CommonTheme.shape.borderRadius,
            paddingTop: CommonTheme.shape.spacingTight,
            paddingBottom: CommonTheme.shape.spacingTight,
            paddingLeft: CommonTheme.shape.spacing,
            paddingRight: CommonTheme.shape.spacing,
            backgroundColor: colorMuted,
          },
          right: {
            margin: 0,
            borderRadius: CommonTheme.shape.borderRadius,
            paddingTop: CommonTheme.shape.spacingTight,
            paddingBottom: CommonTheme.shape.spacingTight,
            paddingLeft: CommonTheme.shape.spacing,
            paddingRight: CommonTheme.shape.spacing,
            backgroundColor: CommonTheme.colors.primary.main,
          },
        }}
      />
    </Appearable>
  );
};

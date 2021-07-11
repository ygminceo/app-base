import { APP } from '@lib/common/app/constants';
import { BOT } from '@lib/common/chat/constants';
import { _QuickReplyInputProps } from '@lib/frontend/chat/components/Chat/internal/_QuickReplyInput.model';
import { IconText, Pressable, Wrapper } from '@lib/frontend/core/components';
import { useTranslation } from '@lib/frontend/locale/hooks';
import React from 'react';

export const _QuickReplyInput = ({ reply, onReply, ...props }: _QuickReplyInputProps) => {
  const { t } = useTranslation([APP, BOT]);
  return (
    <Wrapper grow p spacingTight alignEnd>
      {reply.options &&
        reply.options.map((option, i) => (
          <Pressable key={i} onPress={() => onReply(option)} border borderPrimary>
            <IconText icon={option.icon} small primary>
              {t(option.label)}
            </IconText>
          </Pressable>
        ))}
    </Wrapper>
  );
};

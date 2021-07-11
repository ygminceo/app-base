import React from 'react';
import { APP } from '@lib/common/app/constants';
import { BOT } from '@lib/common/chat/constants';
import { _QuickReplyInputProps } from '@lib/frontend/chat/components/Chat/internal/_QuickReplyInput.model';
import { IconText, Pressable, Wrapper } from '@lib/frontend/core/components';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const _QuickReplyInput = ({ reply, onReply }: _QuickReplyInputProps) => {
  const { t } = useTranslation([APP, BOT]);
  return (
    <Wrapper grow border round p>
      {reply.options &&
        reply.options.map((option, i) => (
          <Pressable key={i} onPress={() => onReply(option)}>
            <IconText icon={option.icon}>{t(option.label)}</IconText>
          </Pressable>
        ))}
    </Wrapper>
  );
};

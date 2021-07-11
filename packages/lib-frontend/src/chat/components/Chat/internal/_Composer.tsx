import { isEmpty, last } from 'lodash';
import React, { useMemo, useRef, useState } from 'react';
import { APP } from '@lib/common/app/constants';
import { ChatMessageModel } from '@lib/common/chat/models';
import { _ComposerProps } from '@lib/frontend/chat/components/Chat/internal/_Composer.model';
import { _QuickReplyInput } from '@lib/frontend/chat/components/Chat/internal/_QuickReplyInput';
import { useChat } from '@lib/frontend/chat/hooks';
import { Icon, TextField, Wrapper } from '@lib/frontend/core/components';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const _Composer = ({ messages, onSend, isDisabled, ...props }: _ComposerProps) => {
  const { t } = useTranslation([APP]);
  const [text, setText] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [height, setHeight] = useState<number>(0);
  const inputRef = useRef<any>();

  const { getUserMessage } = useChat();
  const lastMessage = useMemo(() => last(messages), [messages]);

  const handleSend = (message: Partial<ChatMessageModel>) => {
    if (message.text) {
      let validationError;
      const reply = lastMessage && lastMessage.reply;
      if (reply && reply.input && reply.input.validator) {
        validationError = reply.input.validator(text);
        setError(validationError || '');
      }

      if (!validationError) {
        onSend(getUserMessage({ ...message, replyToKey: reply && reply.key }));
        setText('');
      }
    }
  };

  let children;
  if (isDisabled) {
    children = null;
  } else if (lastMessage && lastMessage.reply && lastMessage.reply.options) {
    children = (
      <_QuickReplyInput
        reply={lastMessage.reply}
        onReply={(option) => handleSend({ text: t(option.label), value: option.value })}
      />
    );
  } else if (lastMessage && lastMessage.reply && lastMessage.reply.input) {
    children = (
      <Wrapper row alignCenter spacingTight>
        <Wrapper grow>
          <TextField
            ref={inputRef}
            error={error}
            icon={(lastMessage && lastMessage.reply && lastMessage.reply.input.icon) || 'chat'}
            label={t(
              (lastMessage && lastMessage.reply && lastMessage.reply.input.label) ||
                'app:labels.message',
            )}
            autoFocus
            onChange={setText}
            value={text}
            onSubmit={() => handleSend({ text })}
          />
        </Wrapper>
        <Icon
          large
          icon="arrow-up"
          onPress={() => handleSend({ text })}
          isDisabled={isEmpty(text)}
        />
      </Wrapper>
    );
  }

  children = (
    <Wrapper onMeasure={({ height }) => setHeight(height)} pTop>
      {children}
    </Wrapper>
  );

  return (
    <Wrapper fullWidth overflowHidden height={height} animatable={{ transition: ['height'] }}>
      {children}
    </Wrapper>
  );
};

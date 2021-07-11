import React from 'react';
import { Chat } from '@lib/frontend/chat/components';
import { useChatBot } from '@lib/frontend/chat/hooks';
import { LANDING_CHAT_BOT } from '@lib/frontend/landing/containers/LandingChat/LandingChat.constants';
import { LandingChatProps } from '@lib/frontend/landing/containers/LandingChat/LandingChat.model';

export const LandingChat = ({ onClose, ...props }: LandingChatProps) => {
  const { messages, setMessages, onSend, isDisabled, isTyping } = useChatBot(
    LANDING_CHAT_BOT,
    onClose,
  );
  return (
    <Chat
      messages={messages}
      setMessages={setMessages}
      onSend={onSend}
      isTyping={isTyping}
      isDisabled={isDisabled}
    />
  );
};

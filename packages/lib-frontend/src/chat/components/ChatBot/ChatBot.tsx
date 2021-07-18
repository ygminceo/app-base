import React from 'react';
import { Chat } from '@lib/frontend/chat/components';
import { useChatBot } from '@lib/frontend/chat/hooks';
import { LANDING_CHAT_BOT } from '@lib/frontend/chat/components/ChatBot/ChatBot.constants';
import { ChatBotProps } from '@lib/frontend/chat/components/ChatBot/ChatBot.model';

export const ChatBot = ({ onClose, ...props }: ChatBotProps) => {
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

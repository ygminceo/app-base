import { get, last } from 'lodash';
import { useEffect, useState } from 'react';
import { ChatMessageModel } from '@lib/common/chat/models';
import { useChat } from '@lib/frontend/chat/hooks/useChat/useChat';
import { BOT_MESSAGES_DELAY } from '@lib/frontend/chat/hooks/useChatBot/useChatBot.constants';
import { UseChatBotModel } from '@lib/frontend/chat/hooks/useChatBot/useChatBot.model';

let timeouts: NodeJS.Timeout[] = [];

export const useChatBot: UseChatBotModel = (chatBot, onClose) => {
  const [messages, setMessages] = useState<ChatMessageModel[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const { getBotMessage } = useChat();

  const streamBotMessages = (botMessages: Partial<ChatMessageModel>[]) =>
    botMessages.forEach((message, i) => {
      timeouts.push(setTimeout(() => setIsTyping(true), BOT_MESSAGES_DELAY * 2 * i));
      timeouts.push(
        setTimeout(() => {
          setMessages((newMessages) => [...newMessages, getBotMessage(message)]);
          setIsTyping(false);
        }, BOT_MESSAGES_DELAY * (2 * i + 1)),
      );
    });

  const onSend = async (message: ChatMessageModel) => {
    setMessages([...messages, message]);
    const rule = get(chatBot.rules, [message.replyToKey || '']);
    const botMessages =
      rule && (await rule(message.value === undefined ? message.text : message.value));
    if (botMessages && botMessages.length) {
      streamBotMessages(botMessages);
    } else {
      onClose && onClose();
    }
  };

  useEffect(() => {
    streamBotMessages(chatBot.messages());
    () => {
      timeouts.forEach(clearTimeout);
      setIsTyping(false);
    };
  }, []);

  const lastMessage = last(messages);
  const isDisabled = !lastMessage || !lastMessage.reply;

  return { messages, setMessages, isTyping, isDisabled, onSend };
};

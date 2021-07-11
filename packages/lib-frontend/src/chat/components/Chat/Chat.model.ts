import { ChatMessageModel } from '@lib/common/chat/models';

export interface ChatProps {
  isDisabled?: boolean;
  isTyping?: boolean;
  messages: ChatMessageModel[];
  setMessages(newMessages: ChatMessageModel[]): any;
  onSend(message: ChatMessageModel): any;
}

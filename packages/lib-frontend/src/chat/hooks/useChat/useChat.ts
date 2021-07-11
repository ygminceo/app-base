import { isString } from 'lodash';
import { ChatBotUser, ChatSystemUser } from '@lib/common/chat/constants';
import { ChatMessageModel, ChatUserModel } from '@lib/common/chat/models';
import { GUID } from '@lib/common/core/utils/GUID/GUID';
import { useChatUser } from '@lib/frontend/chat/stores/chat.reducer';

export const useChat = () => {
  const chatUser = useChatUser();

  const getMessage = (
    message: Partial<ChatMessageModel>,
    user: ChatUserModel,
  ): ChatMessageModel => ({
    ...message,
    _id: GUID.v4(),
    user,
    text: isString(message.text) ? message.text.trim() : message.text || '',
    createdAt: Date.now(),
  });

  return {
    user: chatUser,

    getMessage,

    getSystemMessage: (message: Partial<ChatMessageModel>): ChatMessageModel =>
      getMessage(message, ChatSystemUser),

    getBotMessage: (message: Partial<ChatMessageModel>): ChatMessageModel =>
      getMessage(message, ChatBotUser),

    getUserMessage: (message: Partial<ChatMessageModel>): ChatMessageModel =>
      getMessage(message, chatUser),
  };
};

import { ChatBotModel } from '@lib/common/chat/models';
import { ChatProps } from '@lib/frontend/chat/components/Chat/Chat.model';

export interface UseChatBotReturnsModel extends ChatProps {}

export type UseChatBotModel = (chatBot: ChatBotModel, onClose?: () => any) => UseChatBotReturnsModel;

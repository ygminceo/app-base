import { ChatReplyModel, ChatReplyOptionModel } from '@lib/common/chat/models';

export interface _QuickReplyInputProps {
  reply: ChatReplyModel;
  onReply(option: ChatReplyOptionModel): any;
}

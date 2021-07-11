import { ChatMessageModel } from '@lib/common/chat/models';
import { ChatProps } from '@lib/frontend/chat/components/Chat/Chat.model';

export interface _ComposerProps extends Pick<ChatProps, 'messages'> {
  isDisabled?: boolean;
  onSend(message: Pick<ChatMessageModel, 'text' | 'replyToKey'>): any;
}

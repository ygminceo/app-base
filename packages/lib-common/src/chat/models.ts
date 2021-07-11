import { ReactNode } from 'react';
import { UserModel } from '@lib/common/user/models';
import { FormValidatorModel } from '@lib/frontend/core/hooks/useForm/useForm.model';

export interface ChatMessageModel {
  _id: string;
  value?: string;
  text: string | ReactNode;
  createdAt: number;
  user: ChatUserModel;
  sent?: boolean;
  received?: boolean;
  pending?: boolean;
  reply?: ChatReplyModel;
  replyToKey?: string;
}

export interface ChatReplyOptionModel {
  label: string;
  value: any;
  icon?: string;
}

export interface ChatReplyModel {
  key?: string;
  options?: ChatReplyOptionModel[];
  input?: {
    label?: string;
    icon?: string;
    validator?: FormValidatorModel<any>;
  };
}

export interface ChatUserModel extends Pick<UserModel, '_id' | 'email' | 'phoneNumber'> {
  _id: string;
  name?: string;
  avatar?: string;
  system?: boolean;
}

export interface ChatMessageTextModel extends Pick<ChatMessageModel, 'text' | 'reply'> {}

export interface ChatBotModel {
  messages: () => Partial<ChatMessageModel>[];
  rules: { [key: string]: (value: any) => Promise<ChatMessageTextModel[]> };
}

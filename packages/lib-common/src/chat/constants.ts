import { ChatUserModel } from '@lib/common/chat/models';
import { GUID } from '@lib/common/core/utils/GUID/GUID';

export const CHAT = 'chat';

export const BOT = 'bot';

export const SYSTEM = 'system';

export const ANONYMOUS = 'anonymous';

// TODO: IP address?
export const ChatAnonymousUser: ChatUserModel = {
  _id: GUID.v4(),
};

export const ChatBotUser: ChatUserModel = {
  _id: GUID.random(6),
  system: true,
};

export const ChatSystemUser: ChatUserModel = {
  _id: SYSTEM,
  system: true,
};

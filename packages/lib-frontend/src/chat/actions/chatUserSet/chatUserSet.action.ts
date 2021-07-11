import { createAction } from '@reduxjs/toolkit';
import { CHAT } from '@lib/common/chat/constants';
import { ChatUserModel } from '@lib/common/chat/models';

export const chatUserSetAction = createAction<ChatUserModel>(`${CHAT}/CHAT_USER_SET_ACTION`);

import { createReducer } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { CHAT, ChatAnonymousUser } from '@lib/common/chat/constants';
import { ChatUserModel } from '@lib/common/chat/models';
import { chatUserSetAction } from '@lib/frontend/chat/actions/chatUserSet/chatUserSet.action';
import { RootStateModel } from '@lib/frontend/root/stores/rootState.model';
import { ChatStateModel } from './chat.model';

const initialState: ChatStateModel = {
  chatUser: ChatAnonymousUser,
};

export const chatReducer = createReducer<ChatStateModel>(initialState, (builder) =>
  builder.addCase(chatUserSetAction, (state, action) => {
    state.chatUser = action.payload;
  }),
);

export const useChatUser = () =>
  useSelector<RootStateModel, ChatUserModel>((state) => state[CHAT].chatUser);

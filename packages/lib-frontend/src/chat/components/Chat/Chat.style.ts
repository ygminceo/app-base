import { StyleSheet } from 'react-native';
import { ChatProps } from '@lib/frontend/chat/components/Chat/Chat.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const chatStyle = StyleSheet.create({
  style: {},
});

export const getChatStyle: StyleGetterModel<ChatProps> = ({}) => [chatStyle.style];

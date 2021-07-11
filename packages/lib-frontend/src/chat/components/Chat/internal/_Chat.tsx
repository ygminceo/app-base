import React from 'react';
import { GiftedChat, IMessage, InputToolbar, Message } from 'react-native-gifted-chat';
import { ChatSystemUser } from '@lib/common/chat/constants';
import { ChatMessageModel } from '@lib/common/chat/models';
import { _Bubble } from '@lib/frontend/chat/components/Chat/internal/_Bubble';
import { _ChatProps } from '@lib/frontend/chat/components/Chat/internal/_Chat.model';
import { _Composer } from '@lib/frontend/chat/components/Chat/internal/_Composer';
import { _MessageText } from '@lib/frontend/chat/components/Chat/internal/_MessageText';
import { useChat } from '@lib/frontend/chat/hooks';
import { Loading, Wrapper } from '@lib/frontend/core/components';

export const _Chat = ({ messages, setMessages, onSend, isDisabled, isTyping }: _ChatProps) => {
  const { getSystemMessage, user } = useChat();
  return (
    <Wrapper grow relative>
      <Wrapper grow shrink overflowHidden>
        <GiftedChat
          renderFooter={() => (
            <_Bubble
              user={ChatSystemUser}
              isVisible={isTyping}
              position="left"
              currentMessage={getSystemMessage({ text: <Loading /> }) as IMessage}
              renderTime={() => null}
              renderMessageText={(renderProps) => <_MessageText {...renderProps} />}
            />
          )}
          messages={messages as IMessage[]}
          onSend={(newMessages) =>
            setMessages([...(newMessages as ChatMessageModel[]), ...messages])
          }
          user={user}
          inverted={false}
          alignTop={!messages.length}
          renderMessage={(renderProps) => (
            <Message
              {...renderProps}
              containerStyle={{ left: { margin: 0, padding: 0 }, right: { margin: 0, padding: 0 } }}
            />
          )}
          renderDay={() => null}
          // @ts-ignore
          renderAvatar={null}
          onPressAvatar={() => null}
          messagesContainerStyle={{ overflow: 'scroll' }}
          // scrollToBottomComponent={() => null}
          renderQuickReplies={() => null}
          infiniteScroll
          minInputToolbarHeight={0}
          maxInputToolbarHeight={0}
          renderInputToolbar={(renderProps) => (
            <InputToolbar {...renderProps} containerStyle={{ borderWidth: 0 }} />
          )}
          renderSend={() => null}
          renderComposer={() => null}
          renderTime={() => null}
          renderMessageText={(renderProps) => <_MessageText {...renderProps} />}
          // renderMessageImage={() => null}
          // renderMessageVideo={() => null}
          renderBubble={(renderProps) => <_Bubble {...renderProps} isVisible />}
          // renderSystemMessage={() => null}
          // loadEarlier
          // renderLoadEarlier={() => null}
          // onLoadEarlier={() => null}
        />
      </Wrapper>
      <_Composer messages={messages} onSend={onSend} isDisabled={isDisabled} />
    </Wrapper>
  );
};

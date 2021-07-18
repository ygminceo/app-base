import React, { useState } from 'react';
import { config } from '@lib/common/core/utils/Config/Config';
// import { ChatBot } from '@lib/frontend/landing/containers';
import { ChatButtonProps } from '@lib/frontend/chat/containers/ChatButton/ChatButton.model';
import { Button, Dropdown, Portal, Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';

export const ChatButton = ({ ...props }: ChatButtonProps) => {
  const { styles } = useStyles(props);
  const [chatIsOpen, setChatIsOpen] = useState<boolean>();
  return (
    <Portal>
      <Wrapper absolute right={30} bottom={30}>
        <Dropdown
          anchor={
            <Button
              style={styles}
              onPress={() => setChatIsOpen(!chatIsOpen)}
              icon={chatIsOpen ? 'times' : 'chat'}
              large
            />
          }
          isOpen={chatIsOpen}>
          <Wrapper width={300} height={400}></Wrapper>
        </Dropdown>
      </Wrapper>

      {/* <ChatBot onClose={() => setChatIsOpen(false)} /> */}
    </Portal>
  );
};

import React, { useState } from 'react';
import { BOT, ChatBotUser } from '@lib/common/chat/constants';
import { config } from '@lib/common/core/utils/Config/Config';
import { LANDING } from '@lib/common/landing/constants';
import { Button, Circle, Image, Modal, Text, Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import { LandingChat } from '@lib/frontend/landing/containers';
import { LandingChatButtonProps } from '@lib/frontend/landing/containers/LandingChatButton/LandingChatButton.model';
import { useTranslation } from '@lib/frontend/locale/hooks';

const PUBLIC_URL = config.get<string>('REACT_APP_PUBLIC_URL', '');

export const LandingChatButton = ({ small, large, ...props }: LandingChatButtonProps) => {
  const { styles } = useStyles(props);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>();
  const { t } = useTranslation([BOT, LANDING]);
  return (
    <>
      <Button style={styles} onPress={() => setModalIsOpen(true)} small={small} large={large} next>
        {t('landing:labels.getStarted')}
      </Button>
      {/* TODO: chatbot header separate */}
      <Modal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        header={
          <Wrapper grow row alignCenter spacing>
            <Circle border borderPrimary large center alignCenter>
              <Image src={`${PUBLIC_URL}/images/chatbot.png`} width={30} height={30} />
            </Circle>
            <Wrapper center>
              <Text bold small tight>
                {t('bot:labels.botName', { id: ChatBotUser._id })}
              </Text>
              <Text small tight>
                {t('bot:labels.botDescription')}
              </Text>
            </Wrapper>
          </Wrapper>
        }>
        <LandingChat onClose={() => setModalIsOpen(false)} />
      </Modal>
    </>
  );
};

import React from 'react';
import { ChatBotUser } from '@lib/common/chat/constants';
import { ChatBotModel, ChatMessageTextModel, ChatReplyOptionModel } from '@lib/common/chat/models';
import { ABOUT, CAREERS } from '@lib/common/landing/constants';
import { signInModalIsOpenSetAction } from '@lib/frontend/authentication/actions/signInModalIsOpen/signInModalIsOpen.action';
import { chatUserSetAction } from '@lib/frontend/chat/actions/chatUserSet/chatUserSet.action';
import { Link, Text } from '@lib/frontend/core/components';
import { sizeStyle } from '@lib/frontend/core/styles/size.style';
import { validEmail } from '@lib/frontend/core/utils/validators/validators';
import { landingClient } from '@lib/frontend/landing/clients/LandingClient/LandingClient';
import { Trans } from '@lib/frontend/locale/components';
import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';
import { store } from '@lib/frontend/root/stores/store';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';

const LANDING_CHAT_MENU_REPLY_OPTIONS: ChatReplyOptionModel[] = [
  { icon: 'info-circle', label: tLazy('bot:messages.optionAbout'), value: 'optionCompany' },
  { icon: 'briefcase', label: tLazy('bot:messages.optionCareers'), value: 'optionCareers' },
  { icon: 'email', label: tLazy('bot:messages.optionContact'), value: 'optionContact' },
];

const LANDING_CHAT_YESNO_REPLY_OPTIONS: ChatReplyOptionModel[] = [
  { icon: 'check', label: tLazy('common:labels.yes'), value: true },
  { icon: 'times', label: tLazy('common:labels.no'), value: false },
];

export const LANDING_CHAT_BOT: ChatBotModel = {
  messages: () => [
    {
      text: (
        <Trans
          ns="bot"
          i18nKey="messages.introduction"
          components={[<Text small bold />]}
          values={{ id: ChatBotUser._id }}
          style={sizeStyle.small}
        />
      ),
    },
    {
      text: tLazy('bot:messages.help'),
      reply: {
        key: 'menu',
        options: LANDING_CHAT_MENU_REPLY_OPTIONS,
      },
    },
  ],

  rules: {
    menu: async (value) => {
      let messages: ChatMessageTextModel[] = [];
      switch (value) {
        case 'optionCompany': {
          messages = [
            {
              text: (
                <Trans
                  ns="bot"
                  i18nKey="messages.replyLink"
                  components={[<Link small bold newTab pathname={`/${ABOUT}`} />]}
                  style={sizeStyle.small}
                />
              ),
            },
            {
              text: tLazy('bot:messages.other'),
              reply: {
                key: 'menu',
                options: LANDING_CHAT_MENU_REPLY_OPTIONS.filter(
                  (option) => option.value !== 'optionCompany',
                ),
              },
            },
          ];
          break;
        }
        case 'optionCareers': {
          messages = [
            {
              text: (
                <Trans
                  ns="bot"
                  i18nKey="messages.replyLink"
                  components={[<Link small bold newTab pathname={`/${CAREERS}`} />]}
                  style={sizeStyle.small}
                />
              ),
            },
            {
              text: tLazy('bot:messages.other'),
              reply: {
                key: 'menu',
                options: LANDING_CHAT_MENU_REPLY_OPTIONS.filter(
                  (option) => option.value !== 'optionCareers',
                ),
              },
            },
          ];
          break;
        }
        case 'optionContact': {
          messages = [
            {
              text: tLazy('bot:messages.replyEmail'),
              reply: {
                key: 'email',
                input: {
                  icon: 'email',
                  label: tLazy('app:labels.email'),
                  validator: validEmail,
                },
              },
            },
          ];
          break;
        }
      }
      return messages;
    },

    email: async (value) => {
      const chatUser = store.getState().chat.chatUser;
      store.dispatch(chatUserSetAction({ ...chatUser, email: value }));
      // TODO: handle error
      await landingClient.subscriptionCreate({ email: value });
      return [
        { text: tLazy('bot:messages.emailSuccess') },
        {
          text: (
            <Trans
              ns="bot"
              i18nKey="messages.signIn"
              components={[<Text small bold />]}
              values={{ value }}
              style={sizeStyle.small}
            />
          ),
          reply: {
            key: 'signIn',
            options: LANDING_CHAT_YESNO_REPLY_OPTIONS,
          },
        },
      ];
    },

    signIn: async (value) => {
      if (value) {
        setTimeout(
          () => store.dispatch(signInModalIsOpenSetAction(true)),
          CommonTheme.animation.duration,
        );
        return [];
      }
      return [
        { text: tLazy('bot:messages.ok') },
        {
          text: tLazy('bot:messages.other'),
          reply: {
            key: 'menu',
            options: LANDING_CHAT_MENU_REPLY_OPTIONS,
          },
        },
      ];
    },
  },
};

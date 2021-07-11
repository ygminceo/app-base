import { isString } from 'lodash';
import React from 'react';
import { MessageText } from 'react-native-gifted-chat';
import { APP } from '@lib/common/app/constants';
import { BOT } from '@lib/common/chat/constants';
import { ChatUserModel } from '@lib/common/chat/models';
import { COMMON } from '@lib/common/core/constants';
import { _MessageTextProps } from '@lib/frontend/chat/components/Chat/internal/_MessageText.model';
import { FONT_SIZE_SMALL } from '@lib/frontend/core/styles/size.style';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

export const _MessageText = ({ currentMessage, ...props }: _MessageTextProps) => {
  const colorContrast = useTheme<string>('colors.text.contrast');
  const { t } = useTranslation([APP, BOT, COMMON]);

  let translated = currentMessage;
  if (translated && (translated.user as ChatUserModel).system && isString(translated.text)) {
    translated.text = t(translated.text);
  }

  return (
    <MessageText
      {...props}
      currentMessage={translated}
      textStyle={{
        left: { color: '#000' },
        right: { color: colorContrast },
      }}
      containerStyle={{
        left: { padding: 0, margin: 0 },
        right: { padding: 0, margin: 0 },
      }}
      customTextStyle={{
        fontSize: FONT_SIZE_SMALL,
        margin: 0,
      }}
    />
  );
};

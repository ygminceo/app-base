import { _IconProps } from '@lib/frontend/core/components/Icon/internal/_Icon.model';
import compose from '@lib/frontend/core/utils/compose/compose';
import { get } from 'lodash';
import { IconProps } from 'react-native-vector-icons/dist/Icon';
import { default as Ionicons } from 'react-native-vector-icons/dist/Ionicons';

const ICONS = {
  'arrow-left': 'arrow-back-outline',
  'arrow-right': 'arrow-forward-outline',
  cash: 'cash-outline',
  'chevron-up': 'chevron-up-outline',
  'chevron-down': 'chevron-down-outline',
  'chevron-left': 'chevron-back-outline',
  'chevron-right': 'chevron-forward-outline',
  'ellipsis-vertical': 'ellipsis-vertical',
  'eye-off': 'eye-off-outline',
  signout: 'log-out-outline',
  attach: 'attach-outline',
  'user-circle': 'person-circle-outline',
  add: 'add-outline',
  analytics: 'analytics-outline',
  bookmark: 'bookmark-outline',
  bug: 'bug-outline',
  camera: 'camera-outline',
  card: 'card-outline',
  check: 'checkmark-outline',
  chat: 'chatbubble',
  contrast: 'contrast',
  dark: 'moon',
  edit: 'create-outline',
  ellipsis: 'ellipsis-horizontal',
  email: 'mail-outline',
  eye: 'eye-outline',
  fingerprint: 'finger-print-outline',
  home: 'home-outline',
  image: 'image-outline',
  internet: 'wifi-outline',
  language: 'language-outline',
  light: 'sunny-outline',
  lock: 'lock-closed-outline',
  menu: 'menu-outline',
  notifications: 'notifications-outline',
  phone: 'call-outline',
  refresh: 'refresh-outline',
  save: 'save-outline',
  settings: 'options-outline',
  shield: 'shield-outline',
  switch: 'toggle-outline',
  times: 'close-outline',
  trash: 'trash-bin-outline',
  undo: 'arrow-undo-outline',
  upload: 'cloud-upload-outline',
  user: 'person-outline',
  send: 'send',
  chats: 'chatbubbles-outline',
};

export const _Icon = compose<_IconProps, IconProps>({
  component: Ionicons,
  getProps: ({ icon }) => ({
    name: get(ICONS, icon, icon),
  }),
});

import { get } from 'lodash';
import { _IconProps } from '@lib/frontend/core/components/Icon/internal/_Icon.model';
import compose from '@lib/frontend/core/utils/compose/compose';
import { IconProps } from 'react-native-vector-icons/dist/Icon';
import { default as Ionicons } from 'react-native-vector-icons/dist/Ionicons';

const ICONS = {
  'arrow-left': 'arrow-back-outline',
  'arrow-right': 'arrow-forward-outline',
  'arrow-up': 'arrow-up-outline',
  'arrow-up-circle': 'arrow-up-circle-outline',
  'chevron-down': 'chevron-down-outline',
  'chevron-left': 'chevron-back-outline',
  'chevron-right': 'chevron-forward-outline',
  'chevron-up': 'chevron-up-outline',
  'ellipsis-vertical': 'ellipsis-vertical',
  'eye-off': 'eye-off-outline',
  'exclamation-circle': 'alert-circle-outline',
  'info-circle': 'information-circle-outline',
  'user-circle': 'person-circle-outline',
  add: 'add-outline',
  ear: 'ear-outline',
  smile: 'happy-outline',
  analytics: 'analytics-outline',
  attach: 'attach-outline',
  book: 'book-outline',
  bookmark: 'bookmark-outline',
  briefcase: 'briefcase-outline',
  bug: 'bug-outline',
  building: 'business-outline',
  camera: 'camera-outline',
  card: 'card-outline',
  cash: 'cash-outline',
  chat: 'chatbox-outline',
  chats: 'chatbubbles-outline',
  check: 'checkmark-outline',
  'check-circle': 'checkmark-circle-outline',
  contrast: 'contrast',
  cube: 'cube-outline',
  dark: 'moon',
  edit: 'create-outline',
  ellipsis: 'ellipsis-horizontal',
  email: 'mail-outline',
  eye: 'eye-outline',
  fingerprint: 'finger-print-outline',
  globe: 'globe-outline',
  home: 'home-outline',
  image: 'image-outline',
  internet: 'wifi-outline',
  light: 'sunny-outline',
  lock: 'lock-closed-outline',
  menu: 'menu-outline',
  notifications: 'notifications-outline',
  phone: 'call-outline',
  refresh: 'refresh-outline',
  save: 'save-outline',
  send: 'send-outline',
  settings: 'options-outline',
  shield: 'shield-outline',
  signout: 'log-out-outline',
  switch: 'toggle-outline',
  times: 'close-outline',
  trash: 'trash-bin-outline',
  undo: 'arrow-undo-outline',
  upload: 'cloud-upload-outline',
  user: 'person-outline',
};

export const _Icon = compose<_IconProps, IconProps>({
  component: Ionicons,
  getProps: ({ icon }) => ({
    name: get(ICONS, icon, icon),
  }),
});

import { StyleSheet } from 'react-native';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';
import { LocaleSwitchProps } from '@lib/frontend/locale/containers/LocaleSwitch/LocaleSwitch.model';

export const localeSwitchStyle = StyleSheet.create({
  style: {},
});

export const getLocaleSwitchStyle: StyleGetterModel<LocaleSwitchProps> = ({}) => [
  localeSwitchStyle.style,
];

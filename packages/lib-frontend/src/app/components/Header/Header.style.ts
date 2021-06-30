import { StyleSheet } from 'react-native';
import { HEADER_HEIGHT } from '@lib/frontend/app/components/Header/Header.constants';
import { HeaderProps } from '@lib/frontend/app/components/Header/Header.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const headerStyle = StyleSheet.create({
  style: { height: HEADER_HEIGHT },
});

export const getHeaderStyle: StyleGetterModel<HeaderProps> = () => [headerStyle.style];

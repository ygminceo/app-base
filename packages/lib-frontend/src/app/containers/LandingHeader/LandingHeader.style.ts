import { StyleSheet } from 'react-native';
import { LandingHeaderProps } from '@lib/frontend/app/containers/LandingHeader.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const landingHeaderStyle = StyleSheet.create({
  style: {},
});

export const getLandingHeaderStyle: StyleGetterModel<LandingHeaderProps> = ({}) => [
  landingHeaderStyle.style,
];

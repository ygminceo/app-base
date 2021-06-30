import { StyleSheet } from 'react-native';
import { LogoProps } from '@lib/frontend/core/components/Logo/Logo.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const logoStyle = StyleSheet.create({
  default: {
    width: 120,
    height: 42,
  },
  small: {
    width: 60,
    height: 35,
  },
  large: {
    width: 240,
    height: 120,
  },
});

export const getLogoStyle: StyleGetterModel<LogoProps> = ({ small, large }) => [
  small ? logoStyle.small : large ? logoStyle.large : logoStyle.default,
];

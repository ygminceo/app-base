import { LogoProps } from '@lib/frontend/core/components/Logo/Logo.model';
import { StyleGetter } from '@lib/frontend/core/styles/style.model';
import { StyleSheet } from 'react-native';

export const logoStyle = StyleSheet.create({
  default: {
    width: 150,
    height: 80,
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

export const getLogoStyle: StyleGetter<LogoProps> = ({ small, large }) => [
  small ? logoStyle.small : large ? logoStyle.large : logoStyle.default,
];

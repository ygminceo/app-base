import { StyleSheet } from 'react-native';
import { CardElementProps } from '@lib/frontend/billing/components/CardElement/CardElement.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const cardElementStyle = StyleSheet.create({
  style: {},
});

export const getCardElementStyle: StyleGetterModel<CardElementProps> = ({}) => [
  cardElementStyle.style,
];

import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';
import { StyleSheet } from 'react-native';
import { CardProps } from './Card.model';

export const cardStyle = StyleSheet.create({
  style: {
    borderRadius: 10,
    width: 240,
    height: 130,
  },
});

export const getCardStyle: StyleGetterModel<CardProps> = ({}) => [cardStyle.style];

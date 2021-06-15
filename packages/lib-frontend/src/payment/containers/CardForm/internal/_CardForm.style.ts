import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';
import { _CardFormProps } from '@lib/frontend/payment/containers/CardForm/internal/_CardForm.model';
import { StyleSheet } from 'react-native';

export const CARD_FORM_HEIGHT = 40;

export const cardFormStyle = StyleSheet.create({
  style: { height: CARD_FORM_HEIGHT },
});

export const getCardFormStyle: StyleGetterModel<_CardFormProps> = () => cardFormStyle.style;

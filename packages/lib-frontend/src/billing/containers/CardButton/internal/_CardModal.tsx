import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useDispatch } from 'react-redux';
import { BILLING } from '@lib/common/billing/constants';
import { config } from '@lib/common/core/utils/Config/Config';
import { cardAddAction } from '@lib/frontend/billing/actions/card/card.action';
import { _CardModalProps } from '@lib/frontend/billing/containers/CardButton/internal/_CardModal.model';
import { Form, Modal, Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import { FONT_SIZE_MEDIUM } from '@lib/frontend/core/styles/size.style';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { AppDispatchModel } from '@lib/frontend/root/stores/store';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';

const REACT_APP_STRIPE_TOKEN = config.get<string>('REACT_APP_STRIPE_TOKEN', '');
const stripe = loadStripe(REACT_APP_STRIPE_TOKEN);

export const _CardModal = ({ isOpen, onClose, ...props }: _CardModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <Elements stripe={stripe}>
      <_CardForm {...props} />
    </Elements>
  </Modal>
);

const _CardForm = ({ token, isOpen, onClose, ...props }: _CardModalProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation([BILLING]);
  const dispatch = useDispatch<AppDispatchModel>();

  const stripeClient = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {
    if (stripeClient && elements) {
      const card = elements.getElement(CardElement);
      if (card) {
        const result = await stripeClient.confirmCardSetup(token, {
          payment_method: { card },
          // @ts-ignore
          expand: ['payment_method'],
        });
        if (result.error) {
          // TODO: handle error
        } else {
          // @ts-ignore
          const { id, card } = result.setupIntent.payment_method;
          const { brand, exp_month, exp_year, last4 } = card;
          return dispatch(cardAddAction({ id, brand, exp_month, exp_year, last4 }));
        }
      }
    }
    return null;
  };

  return (
    <Form style={styles} onSubmit={handleSubmit} submitLabel={t('billing:labels.addCard')}>
      <_CardSection />
    </Form>
  );
};

const _CardSection = () => {
  const colorPrimary = useTheme<string>('colors.text.primary');
  const borderColor = useTheme<string>('colors.border');
  return (
    <Wrapper p grow border round center>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: `${FONT_SIZE_MEDIUM}px`,
              color: colorPrimary,
              '::placeholder': { color: borderColor },
            },
            invalid: {
              color: CommonTheme.colors.error.main,
            },
          },
        }}
      />
    </Wrapper>
  );
};

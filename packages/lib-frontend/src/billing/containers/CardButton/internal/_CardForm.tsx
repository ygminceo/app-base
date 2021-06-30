import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useDispatch } from 'react-redux';
import { cardAddAction } from '@lib/frontend/billing/actions/card/card.action';
import { _CardFormProps } from '@lib/frontend/billing/containers/CardButton/internal/_CardForm.model';
import { Form, Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import { FONT_SIZE_MEDIUM } from '@lib/frontend/core/styles/size.style';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { AppDispatchModel } from '@lib/frontend/root/stores/store';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';

export const _CardForm = ({ ...props }: _CardFormProps) => (
  <Elements stripe={props.stripe.stripe}>
    <_CardFormElement {...props} />
  </Elements>
);

const _CardFormElement = ({ stripe, ...props }: _CardFormProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation(['payment']);
  const dispatch = useDispatch<AppDispatchModel>();

  const stripeClient = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {
    if (stripeClient && elements) {
      const card = elements.getElement(CardElement);
      if (card) {
        const result = await stripeClient.confirmCardSetup(stripe.token, {
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

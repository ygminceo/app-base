import { config } from '@lib/common/core/utils/Config/Config';
import { STRIPE_INTEGRATION_GET } from '@lib/common/integration/stripe/constants';
import { StripeIntentModel } from '@lib/common/integration/stripe/models';
import { useAccountProtected } from '@lib/frontend/account/hooks';
import { Button, Wrapper } from '@lib/frontend/core/components';
import { useQuery, useStyles } from '@lib/frontend/core/hooks';
import { shapeStyle } from '@lib/frontend/core/styles/shape.style';
import { FONT_SIZE_MEDIUM } from '@lib/frontend/core/styles/size.style';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { paymentClient } from '@lib/frontend/payment/clients/PaymentClient/PaymentClient';
import { _CardFormProps } from '@lib/frontend/payment/containers/CardForm/internal/_CardForm.model';
import { getCardFormStyle } from '@lib/frontend/payment/containers/CardForm/internal/_CardForm.style';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe, StripeCardElement } from '@stripe/stripe-js';
import React, { SyntheticEvent, useMemo } from 'react';

const REACT_APP_STRIPE_TOKEN = config.get<string>('REACT_APP_STRIPE_TOKEN', '');

export const _CardForm = ({ ...props }: _CardFormProps) => {
  const account = useAccountProtected();

  const { data } = useQuery(STRIPE_INTEGRATION_GET, async () => {
    const { id, intent } = await paymentClient.stripeIntegrationGet({
      accountId: account._id,
      service: 'intent',
    });
    return {
      stripeObject: await loadStripe(REACT_APP_STRIPE_TOKEN, { stripeAccount: id }),
      intent,
    };
  });

  return data?.stripeObject && data.intent ? (
    <Elements stripe={data.stripeObject}>
      <_CardElement {...props} intent={data.intent} />
    </Elements>
  ) : null;
};

const _CardElement = ({ ...props }: _CardFormProps & { intent: StripeIntentModel }) => {
  const { styles } = useStyles(props, [getCardFormStyle]);
  const { t } = useTranslation(['payment']);
  const colorPrimary = useTheme<string>('colors.text.primary');
  const borderColor = useTheme<string>('colors.border');

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement) as StripeCardElement;
    const result = await stripe.confirmCardSetup('{{CLIENT_SECRET}}', { payment_method: { card } });
    if (result.error) {
      // Display result.error.message in your UI.
    } else {
      console.warn(result);
      // result.setupIntent.payment_method to your server to save the
    }
  };

  const cardElementStyle = useMemo(
    () => ({
      base: {
        fontSize: `${FONT_SIZE_MEDIUM}px`,
        color: colorPrimary,
        '::placeholder': { color: borderColor },
      },
      invalid: {
        color: CommonTheme.colors.error.main,
      },
    }),
    [colorPrimary, borderColor],
  );

  return (
    <Wrapper row spacing>
      <Wrapper style={styles} grow border round center p>
        <form onSubmit={handleSubmit}>
          <CardElement options={{ style: cardElementStyle }} />
          <button style={shapeStyle.hidden} type="submit" />
        </form>
      </Wrapper>
      <Button fullWidth>{t('payment:labels.addCard')}</Button>
    </Wrapper>
  );
};

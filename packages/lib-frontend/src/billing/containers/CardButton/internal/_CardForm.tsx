import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { _CardFormProps } from '@lib/frontend/billing/containers/CardButton/internal/_CardForm.model';
import { Form, Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import { FONT_SIZE_MEDIUM } from '@lib/frontend/core/styles/size.style';
import { useTranslation } from '@lib/frontend/locale/hooks';
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

  const stripeClient = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {
    if (stripeClient && elements) {
      const card = elements.getElement(CardElement);
      if (card) {
        const result = await stripeClient.confirmCardSetup(stripe.token, {
          payment_method: { card },
        });
        if (result.error) {
          // TODO: handle error
        } else {
          console.warn(card);
          console.warn(result.setupIntent.payment_method);
          //   {
          //     "setupIntent": {
          //         "id": "seti_1J6Ln2KTa80YHlmGKKrrRLvb",
          //         "object": "setup_intent",
          //         "cancellation_reason": null,
          //         "client_secret": "seti_1J6Ln2KTa80YHlmGKKrrRLvb_secret_JjpRJx7dHczuxAum4ThrP74NhtvkUzp",
          //         "created": 1624653496,
          //         "description": null,
          //         "last_setup_error": null,
          //         "livemode": false,
          //         "next_action": null,
          //         "payment_method": "pm_1J6Ln8KTa80YHlmGvVeIrHHD",
          //         "payment_method_types": [
          //             "card"
          //         ],
          //         "status": "succeeded",
          //         "usage": "off_session"
          //     }
          // }
        }
      }
    }
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

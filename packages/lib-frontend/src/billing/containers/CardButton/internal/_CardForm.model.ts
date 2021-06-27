import { Stripe } from '@stripe/stripe-js';

export interface _StripeCardFormModel {
  stripe: Stripe;
  token: string;
}

export interface _CardFormProps {
  stripe: _StripeCardFormModel;
}

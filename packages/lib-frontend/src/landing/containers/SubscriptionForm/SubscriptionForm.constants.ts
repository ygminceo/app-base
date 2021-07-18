import { SubscriptionModel } from '@lib/common/landing/models';
import { FormValidatorsModel } from '@lib/frontend/core/hooks/useForm/useForm.model';
import { validEmail } from '@lib/frontend/core/utils/validators/validators';

export const SUBSCRIPTION_FORM_INITIAL_VALUES = {
  email: '',
};

export const SUBSCRIPTION_FORM_VALIDATORS: FormValidatorsModel<SubscriptionModel> = {
  email: validEmail,
};

import { EmailFormModel } from '@lib/common/authentication/models';
import { FormValidatorsModel } from '@lib/frontend/core/hooks/useForm/useForm.model';
import { validEmail } from '@lib/frontend/core/utils/validators/validators';

export const EMAIL_FORM_INITIAL_VALUES: EmailFormModel = {
  emailAddress: '',
};

export const EMAIL_FORM_VALIDATORS: FormValidatorsModel<EmailFormModel> = {
  emailAddress: validEmail,
};

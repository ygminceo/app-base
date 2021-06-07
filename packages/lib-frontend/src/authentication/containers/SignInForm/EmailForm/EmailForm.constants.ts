import { EmailFormSchema } from '@lib/common/authentication/models';
import { FormValidators } from '@lib/frontend/core/hooks/useForm/useForm.model';
import { validEmail } from '@lib/frontend/core/utils/validators/validators';

export const EMAIL_FORM_INITIAL_VALUES: EmailFormSchema = {
  emailAddress: '',
};

export const EMAIL_FORM_VALIDATORS: FormValidators<EmailFormSchema> = {
  emailAddress: validEmail,
};

import { ContactFormModel } from '@lib/common/app/models';
import { FormValidatorsModel } from '@lib/frontend/core/hooks/useForm/useForm.model';
import { validEmail } from '@lib/frontend/core/utils/validators/validators';

export const CONTACT_FORM_INITIAL_VALUES: ContactFormModel = {
  email: '',
};

export const CONTACT_FORM_VALIDTATORS: FormValidatorsModel<ContactFormModel> = {
  email: validEmail,
};

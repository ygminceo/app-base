import { EmailFormModel } from '@lib/common/authentication/models';
import { FormValidatorsModel } from '@lib/frontend/core/hooks/useForm/useForm.model';
import { validEmail } from '@lib/frontend/core/utils/validators/validators';
import { store } from '@lib/frontend/root/stores/store';

// export const EMAIL_FORM_INITIAL_VALUES: EmailFormModel = {
//   email: '',
// };

export const EMAIL_FORM_INITIAL_VALUES = (): EmailFormModel => {
  const chatUser = store.getState().chat.chatUser;
  return {
    email: chatUser.email || '',
  };
};

export const EMAIL_FORM_VALIDATORS: FormValidatorsModel<EmailFormModel> = {
  email: validEmail,
};

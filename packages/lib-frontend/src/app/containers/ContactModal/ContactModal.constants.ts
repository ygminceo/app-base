import { ContactRequestModel } from '@lib/common/app/models';
import { ContactForm, ContactSuccess } from '@lib/frontend/app/containers';
import { ContactFormProps } from '@lib/frontend/app/containers/ContactForm/ContactForm.model';
import { StepModel } from '@lib/frontend/core/components/Steps/Steps.model';
import { ContactSuccessProps } from './../ContactSuccess/ContactSuccess.model';

export const CONTACT_FORM_STEPS: StepModel<ContactRequestModel, any>[] = [
  {
    getComponent: () => ContactForm,
  } as StepModel<ContactRequestModel, ContactFormProps>,

  {
    getComponent: () => ContactSuccess,
  } as StepModel<ContactRequestModel, ContactSuccessProps>,
];

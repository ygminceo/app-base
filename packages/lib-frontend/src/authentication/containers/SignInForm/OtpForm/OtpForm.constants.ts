import { OTP_LENGTH } from '@lib/common/authentication/constants';
import { OtpFormSchema } from '@lib/common/authentication/models';
import { FormValidators } from '@lib/frontend/core/hooks/useForm/useForm.model';
import { exactLength } from '@lib/frontend/core/utils/validators/validators';

export const OTP_FORM_INITIAL_VALUES: OtpFormSchema = {
  otp: '',
};

export const OTP_FORM_VALIDATORS: FormValidators<OtpFormSchema> = {
  otp: exactLength(OTP_LENGTH),
};

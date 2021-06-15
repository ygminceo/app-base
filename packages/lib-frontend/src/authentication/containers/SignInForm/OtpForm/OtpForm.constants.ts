import { OTP_LENGTH } from '@lib/common/authentication/constants';
import { OtpFormModel } from '@lib/common/authentication/models';
import { FormValidatorsModel } from '@lib/frontend/core/hooks/useForm/useForm.model';
import { exactLength } from '@lib/frontend/core/utils/validators/validators';

export const OTP_FORM_INITIAL_VALUES: OtpFormModel = {
  otp: '',
};

export const OTP_FORM_VALIDATORS: FormValidatorsModel<OtpFormModel> = {
  otp: exactLength(OTP_LENGTH),
};

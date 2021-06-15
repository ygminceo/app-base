import { OtpFormModel } from '@lib/common/authentication/models';
import { StepProps } from '@lib/frontend/core/components/Steps/Steps.model';

export interface OtpFormProps extends StepProps<OtpFormModel> {
  username: string;
  onSend(username: string): any;
  onSubmit(data: OtpFormModel): any;
}

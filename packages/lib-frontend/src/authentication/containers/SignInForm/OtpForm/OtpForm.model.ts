import { OtpFormSchema } from '@lib/common/authentication/models';
import { StepProps } from '@lib/frontend/core/components/Steps/Steps.model';

export interface OtpFormProps extends StepProps<OtpFormSchema> {
  username: string;
  onSend(username: string): any;
  onSubmit(data: OtpFormSchema): any;
}

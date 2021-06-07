import {
  FormErrorData,
  UseFormProps,
  UseFormReturns,
} from '@lib/frontend/core/hooks/useForm/useForm.model';

export interface _UseFormProps<F> extends Omit<UseFormProps<F>, 'validators'> {
  onValidate(data: F): FormErrorData<F> | undefined;
}

export type _UseFormReturns<F> = Omit<UseFormReturns<F>, 'isFilled'>;

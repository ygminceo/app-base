import { FormSchema } from '@lib/common/core/models';

export type FormErrorData<F> = { [K in keyof F]?: string | undefined };

export type FormValidator<F> = (value: any, data?: F) => string | undefined;

export type FormValidators<F> = { [K in keyof F]?: FormValidator<F> };

export interface UseFormProps<F extends FormSchema> {
  initialValues: F;
  onSubmit(data: F): any;
  validators?: FormValidators<F>;
}

export interface UseFormReturns<F extends FormSchema> {
  errors: FormErrorData<F>;
  handleChange(name: string): any;
  handleReset(): any;
  handleSubmit(): any;
  isValid: boolean;
  isFilled: boolean;
  isLoading: boolean;
  values: F;
  setValues(data: F): any;
}

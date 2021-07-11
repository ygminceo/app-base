import { FormModel } from '@lib/common/core/models';

export type FormErrorModel<F> = { [K in keyof F]?: string | undefined };

export type FormValidatorModel<F> = (value: any, data?: F) => string | undefined;

export type FormValidatorsModel<F> = { [K in keyof F]?: FormValidatorModel<F> };

export interface UseFormParamsModel<F extends FormModel> {
  initialValues: F | (() => F);
  onSubmit(data: F): any;
  validators?: FormValidatorsModel<F>;
}

export interface UseFormReturnsModel<F extends FormModel> {
  errors: FormErrorModel<F>;
  handleChange(name: string): any;
  handleReset(): any;
  handleSubmit(): any;
  isValid: boolean;
  isFilled: boolean;
  isLoading: boolean;
  values: F;
  setValues(data: F): any;
}

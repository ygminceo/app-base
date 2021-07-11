import {
  FormErrorModel,
  UseFormParamsModel,
  UseFormReturnsModel,
} from '@lib/frontend/core/hooks/useForm/useForm.model';

export interface _UseFormParamsModel<F>
  extends Omit<UseFormParamsModel<F>, 'validators' | 'initialValues'> {
  onValidate(data: F): FormErrorModel<F> | undefined;
  initialValues: F;
}

export type _UseFormReturnsModel<F> = Omit<UseFormReturnsModel<F>, 'isFilled'>;

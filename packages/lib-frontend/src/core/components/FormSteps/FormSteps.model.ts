import {
  UseFormParamsModel,
  UseFormReturnsModel,
} from '@lib/frontend/core/hooks/useForm/useForm.model';
import { StyledProps } from '@lib/frontend/core/styles/style.model';
import { FormModel } from '@lib/common/core/models';
import { ReactElement } from 'react';

export interface FormStep<F extends FormModel, A extends FormModel = F>
  extends Omit<UseFormParamsModel<F>, 'onSubmit'> {
  onSubmit(data: F, dataAll: A): any;
  component: (
    props: Pick<
      UseFormReturnsModel<F>,
      | 'values'
      | 'errors'
      | 'handleChange'
      | 'handleSubmit'
      | 'handleReset'
      | 'isLoading'
      | 'isValid'
    > & {
      dataAll: A;
    },
  ) => ReactElement;
}

export interface FormStepProps {
  handleSuccess(): any;
}

export interface FormStepsProps extends StyledProps {
  forms: FormStep<any, any>[];
}

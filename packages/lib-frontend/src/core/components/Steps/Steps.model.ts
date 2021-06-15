import { StyledProps } from '@lib/frontend/core/styles/style.model';
import { FormModel } from '@lib/common/core/models';
import { ComponentType } from 'react';

export interface StepsProps<F extends FormModel> extends StyledProps {
  steps: StepModel<F, any>[];
}

export interface StepModel<F extends FormModel, P> {
  component: ComponentType<P>;
  getProps?: (data: F) => Omit<P, 'onSuccess'>;
}

export interface StepProps<F> extends StyledProps {
  onSuccess(data: F): any;
}

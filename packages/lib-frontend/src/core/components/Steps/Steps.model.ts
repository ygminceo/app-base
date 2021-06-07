import { StyledProps } from '@lib/frontend/core/styles/style.model';
import { FormSchema } from '@lib/common/core/models';
import { ComponentType } from 'react';

export interface StepsProps<F extends FormSchema> extends StyledProps {
  steps: StepType<F, any>[];
}

export interface StepType<F extends FormSchema, P> {
  component: ComponentType<P>;
  getProps?: (data: F) => Omit<P, 'onSuccess'>;
}

export interface StepProps<F> extends StyledProps {
  onSuccess(data: F): any;
}

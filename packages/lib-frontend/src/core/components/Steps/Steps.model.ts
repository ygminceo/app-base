import { ComponentType, Component } from 'react';
import { FormModel } from '@lib/common/core/models';
import { StyledProps } from '@lib/frontend/core/styles/style.model';

export interface StepsProps<F extends FormModel> extends StyledProps {
  steps: StepModel<F, any>[];
  onSuccess?(data: F): any;
}

export interface StepModel<F extends FormModel, P> {
  getComponent: (data: any) => ComponentType<P>;
  getProps?: (data: F) => Omit<P, 'onSuccess'>;
}

export interface StepProps<F> extends StyledProps {
  onSuccess(data: F): any;
}

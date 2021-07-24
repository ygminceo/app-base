import { ComponentType } from 'react';
import { FormModel } from '@lib/common/core/models';
import { TrackableProps } from '@lib/frontend/analytics/containers/Trackable/Trackable.model';
import { StyledProps } from '@lib/frontend/core/styles/style.model';

export interface StepsProps<F extends FormModel> extends TrackableProps, StyledProps {
  steps: StepModel<F, any>[];
  onSuccess?(data: F): any;
}

export interface StepModel<F extends FormModel, P> {
  key: string;
  getComponent: (data: any) => ComponentType<P>;
  getProps?: (data: F) => Omit<P, 'onSuccess'>;
}

export interface StepProps<F> extends StyledProps {
  onSuccess(data: F): any;
}

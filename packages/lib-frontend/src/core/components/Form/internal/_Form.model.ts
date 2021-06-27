import { PropsWithChildren } from 'react';
import { FormProps } from '@lib/frontend/core/components/Form/Form.model';

export interface _FormProps extends Pick<FormProps, 'onSubmit'>, PropsWithChildren<{}> {}

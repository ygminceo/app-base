import { PropsWithChildren } from 'react';
import { WrapperProps } from '@lib/frontend/core/components/Wrapper/Wrapper.model';
import { SizeProps } from '@lib/frontend/core/styles/size.model';

export interface CircleProps extends SizeProps, WrapperProps, PropsWithChildren<{}> {}

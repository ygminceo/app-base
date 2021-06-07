import { _Trans } from '@lib/frontend/locale/components/Trans/internal/_Trans';
import { TransProps } from '@lib/frontend/locale/components/Trans/Trans.model';
import React from 'react';

export const Trans = (props: TransProps) => <_Trans {...props} />;

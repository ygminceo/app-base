import { _Portal } from '@lib/frontend/core/components/Portal/internal/_Portal';
import { PortalProps } from '@lib/frontend/core/components/Portal/Portal.model';
import React from 'react';

export const Portal = ({ children }: PortalProps) => <_Portal>{children}</_Portal>;

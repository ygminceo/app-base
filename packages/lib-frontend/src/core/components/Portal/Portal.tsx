import React from 'react';
import { PortalProps } from '@lib/frontend/core/components/Portal/Portal.model';
import { _Portal } from '@lib/frontend/core/components/Portal/internal/_Portal';

export const Portal = ({ children }: PortalProps) => <_Portal>{children}</_Portal>;

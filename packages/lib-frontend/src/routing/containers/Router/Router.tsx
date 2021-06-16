import React from 'react';
import { RouterProps } from '@lib/frontend/routing/containers/Router/Router.model';
import { _Router } from '@lib/frontend/routing/containers/Router/internal/_Router';

export const Router = ({ routes }: RouterProps) => <_Router routes={routes} />;

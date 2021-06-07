import { _Router } from '@lib/frontend/routing/containers/Router/internal/_Router';
import { RouterProps } from '@lib/frontend/routing/containers/Router/Router.model';
import React from 'react';

export const Router = ({ routes }: RouterProps) => <_Router routes={routes} />;

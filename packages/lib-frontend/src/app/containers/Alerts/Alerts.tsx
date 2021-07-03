import React from 'react';
import { AlertsProps } from '@lib/frontend/app/containers/Alerts/Alerts.model';
import { useAlerts } from '@lib/frontend/app/stores/app.reducer';
import { Alert, Wrapper } from '@lib/frontend/core/components';

export const Alerts = ({ ...props }: AlertsProps) => {
  const alerts = useAlerts();
  return alerts.length ? (
    <Wrapper absoluteBottom above p selfCenter>
      {alerts.map((alert, i) => (
        <Alert {...alert} key={i} />
      ))}
    </Wrapper>
  ) : null;
};

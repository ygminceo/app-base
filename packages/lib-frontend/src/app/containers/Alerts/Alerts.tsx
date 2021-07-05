import React from 'react';
import { AlertsProps } from '@lib/frontend/app/containers/Alerts/Alerts.model';
import { useAlerts } from '@lib/frontend/app/stores/app.reducer';
import { Alert, Portal, Wrapper } from '@lib/frontend/core/components';

export const Alerts = ({ ...props }: AlertsProps) => {
  const alerts = useAlerts();
  return alerts.length ? (
    <Portal>
      <Wrapper absoluteBottom above mBottom mLeft mRight center alignCenter>
        {alerts.map((alert, i) => (
          <Alert {...alert} key={i} />
        ))}
      </Wrapper>
    </Portal>
  ) : null;
};

import React from 'react';
import { AlertsProps } from '@lib/frontend/app/containers/Alerts/Alerts.model';
import { useAlerts } from '@lib/frontend/app/stores/app.reducer';
import { Alert, Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';

export const Alerts = ({ ...props }: AlertsProps) => {
  const { styles } = useStyles(props);
  const alerts = useAlerts();
  return (
    <Wrapper style={styles} absoluteBottom above p alignCenter>
      {alerts.map((alert, i) => (
        <Alert {...alert} key={i} />
      ))}
    </Wrapper>
  );
};

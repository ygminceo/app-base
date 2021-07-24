import React, { createElement, useEffect, useMemo, useState } from 'react';
import {
  ANALYTICS_ACTION_CHANGE,
  ANALYTICS_ACTION_CLOSE,
  ANALYTICS_ACTION_OPEN,
} from '@lib/common/analytics/constants';
import { FormModel } from '@lib/common/core/models';
import { useAnalytics } from '@lib/frontend/analytics/hooks';
import { Appearable, Icon, Wrapper } from '@lib/frontend/core/components';
import { Slidable } from '@lib/frontend/core/components/Slidable/Slidable';
import { StepsProps } from '@lib/frontend/core/components/Steps/Steps.model';
import { useStyles, useUnmount } from '@lib/frontend/core/hooks';

export const Steps = <F extends FormModel>({
  steps,
  onSuccess,
  trackable,
  ...props
}: StepsProps<F>) => {
  const { styles } = useStyles(props);
  const analytics = useAnalytics();
  const [previous, setPrevious] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);
  const [dataAll, setDataAll] = useState<any>({});
  const isLastStep = useMemo(() => current === steps.length - 1, [current]);

  const handleSetStep = (n: number) => {
    setPrevious(current);
    setCurrent(n);

    trackable &&
      analytics.track({
        ...trackable,
        action: ANALYTICS_ACTION_CHANGE,
        params: { current: steps[n].key, previous: steps[current].key },
      });
  };

  useEffect(() => {
    trackable &&
      analytics.track({
        ...trackable,
        action: ANALYTICS_ACTION_OPEN,
      });
  }, []);

  useUnmount(() => {
    trackable &&
      analytics.track({
        ...trackable,
        action: ANALYTICS_ACTION_CLOSE,
        params: { current: steps[current].key },
      });
  });

  return (
    <Wrapper style={styles} grow>
      <Wrapper row>
        <Appearable isVisible={current > 0}>
          <Icon icon="arrow-left" large onPress={() => handleSetStep(current - 1)} />
        </Appearable>
      </Wrapper>

      <Wrapper grow relative>
        <Slidable previous={previous} current={current}>
          {steps.map((step, i) => {
            const component = step.getComponent(dataAll);
            return createElement(component, {
              key: i,
              onSuccess: (data: any) => {
                const dataCombined = { ...dataAll, ...data };
                if (isLastStep) {
                  onSuccess && onSuccess(dataCombined);
                } else {
                  handleSetStep(current + 1);
                }
                return setDataAll(dataCombined);
              },
              ...(step.getProps ? step.getProps(dataAll) : {}),
            });
          })}
        </Slidable>
      </Wrapper>
    </Wrapper>
  );
};

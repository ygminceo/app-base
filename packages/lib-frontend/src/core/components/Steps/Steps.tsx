import { Appearable, Icon, Wrapper } from '@lib/frontend/core/components';
import { Slidable } from '@lib/frontend/core/components/Slidable/Slidable';
import { StepsProps } from '@lib/frontend/core/components/Steps/Steps.model';
import { useStyles } from '@lib/frontend/core/hooks';
import { FormSchema } from '@lib/common/core/models';
import { map } from 'lodash';
import React, { createElement, useMemo, useState } from 'react';

export const Steps = <F extends FormSchema>({ steps, ...props }: StepsProps<F>) => {
  const { styles } = useStyles(props);
  const [previous, setPrevious] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);
  const [dataAll, setDataAll] = useState<any>({});
  const isLastStep = useMemo(() => current === steps.length - 1, [current]);
  return (
    <Wrapper style={styles} grow>
      <Appearable isVisible={current > 0}>
        <Icon
          icon="arrow-left"
          large
          onPress={() => {
            setPrevious(current);
            setCurrent(current - 1);
          }}
        />
      </Appearable>

      <Wrapper grow relative>
        <Slidable previous={previous} current={current}>
          {steps.map((step, i) =>
            createElement(step.component, {
              key: i,
              onSuccess: (data: any) => {
                const dataCombined = { ...dataAll, ...data };
                if (!isLastStep) {
                  setPrevious(current);
                  setCurrent(current + 1);
                }
                return setDataAll(dataCombined);
              },
              ...(step.getProps ? step.getProps(dataAll) : {}),
            }),
          )}
        </Slidable>
      </Wrapper>
    </Wrapper>
  );
};

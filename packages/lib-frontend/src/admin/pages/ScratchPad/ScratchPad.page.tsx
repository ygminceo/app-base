import { toNumber } from 'lodash';
import moment from 'moment';
import React from 'react';
import { ScratchPadPageProps } from '@lib/frontend/admin/pages/ScratchPad/ScratchPad.model';
import { DashboardLayout } from '@lib/frontend/app/layouts';
import { Wrapper } from '@lib/frontend/core/components';
import { Chart } from '@lib/frontend/core/components/Chart/Chart';
import { ChartAxisModel, ChartSeriesModel } from '@lib/frontend/core/components/Chart/Chart.model';
import { useAggregation } from '@lib/frontend/core/hooks';
import { TestModeSwitch } from '@lib/frontend/dashboard/containers';
import { useIsTestMode } from '@lib/frontend/dashboard/stores/dashboard.reducer';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';

const TRANSACTION_DATA_INCOME = [
  {
    datetime: moment('20210501', 'YYYYMMDD').valueOf(),
    amount: 10,
    category: 'revenue',
    name: 'coffee',
  },
  {
    datetime: moment('20210501', 'YYYYMMDD').valueOf(),
    amount: 15,
    category: 'revenue',
    name: 'coffee',
  },
  {
    datetime: moment('20210502', 'YYYYMMDD').valueOf(),
    amount: 20,
    category: 'revenue',
    name: 'coffee',
  },
  {
    datetime: moment('20210503', 'YYYYMMDD').valueOf(),
    amount: 12,
    category: 'revenue',
    name: 'coffee',
  },
  {
    datetime: moment('20210504', 'YYYYMMDD').valueOf(),
    amount: 18,
    category: 'revenue',
    name: 'coffee',
  },
  {
    datetime: moment('20210505', 'YYYYMMDD').valueOf(),
    amount: 18,
    category: 'revenue',
    name: 'coffee',
  },
];

const TRANSACTION_DATA_EXPENSE = [
  {
    datetime: moment('20210501', 'YYYYMMDD').valueOf(),
    amount: 5,
    category: 'revenue',
    name: 'coffee',
  },
  {
    datetime: moment('20210501', 'YYYYMMDD').valueOf(),
    amount: 3,
    category: 'revenue',
    name: 'coffee',
  },
  {
    datetime: moment('20210502', 'YYYYMMDD').valueOf(),
    amount: 10,
    category: 'revenue',
    name: 'coffee',
  },
  {
    datetime: moment('20210503', 'YYYYMMDD').valueOf(),
    amount: 3,
    category: 'revenue',
    name: 'coffee',
  },
  {
    datetime: moment('20210504', 'YYYYMMDD').valueOf(),
    amount: 5,
    category: 'revenue',
    name: 'coffee',
  },
  {
    datetime: moment('20210505', 'YYYYMMDD').valueOf(),
    amount: 2,
    category: 'revenue',
    name: 'coffee',
  },
];

const SERIES: ChartSeriesModel[] = [
  {
    // TODO: tlazy
    name: 'Income',
    data: TRANSACTION_DATA_INCOME,
    type: 'column',
    color: CommonTheme.colors.primary.main,
  },
  {
    name: 'Expense',
    data: TRANSACTION_DATA_EXPENSE,
    type: 'column',
    color: CommonTheme.colors.primary.light,
  },
  {
    name: 'Profit / Loss',
    data: [
      ...TRANSACTION_DATA_INCOME,
      ...TRANSACTION_DATA_EXPENSE.map((row) => ({ ...row, amount: -row.amount })),
    ],
    type: 'line',
    color: CommonTheme.colors.success.main,
  },
];

const x: ChartAxisModel = { key: 'date', type: 'datetime' };
const y: ChartAxisModel = { key: 'amount' };

export const ScratchPadPage = ({ ...props }: ScratchPadPageProps) => {
  // const isTestMode = useIsTestMode();
  const isTestMode = true;

  const aggregation = useAggregation<any, any>({
    by: 'datetime',
    key: 'x',
    aggregations: [{ key: 'amount', type: 'sum', as: 'y' }],
    transform: (row) => [toNumber(row.x), row.y],
  });

  const series = SERIES.map((s) => ({ ...s, data: aggregation(s.data) }));

  return (
    <DashboardLayout>
      <Wrapper grow p spacing>
        <Wrapper row end alignCenter>
          <TestModeSwitch />
        </Wrapper>
        <Chart title={'Income / Expense'} series={isTestMode ? series : []} x={x} y={y} />
      </Wrapper>
    </DashboardLayout>
  );
};

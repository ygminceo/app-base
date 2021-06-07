import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';
import { PaymentReceive } from '@lib/frontend/payment/containers';
import { TabClass } from '@lib/frontend/routing/containers/Tabs/Tabs.model';

export const PAYMENT_TABS: TabClass[] = [
  {
    title: tLazy('payment:labels.paymentReceive'),
    component: PaymentReceive,
  },
  {
    title: tLazy('two'),
    component: PaymentReceive,
  },
  {
    title: tLazy('three'),
    component: PaymentReceive,
  },
];

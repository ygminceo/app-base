import { configureStore } from '@lib/frontend/root/stores/configureStore';

export const store = configureStore();

export type AppDispatchType = typeof store.dispatch;

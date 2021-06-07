import { _BankApi } from '@lib/backend/payment/utils/BankApi/internal/_BankApi';

export class BankApi extends _BankApi {}

export const bankApi = new BankApi();

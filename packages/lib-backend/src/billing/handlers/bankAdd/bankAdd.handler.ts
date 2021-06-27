import { Bank } from '@lib/backend/billing/database/bank.entity';
import { BankAddHandlerModel } from '@lib/backend/billing/handlers/bankAdd/bankAdd.model';
import { plaidAdmin } from '@lib/backend/billing/utils/PlaidAdmin/PlaidAdmin';
import { userGetHandler } from '@lib/backend/user/handlers';

export const bankAddHandler: BankAddHandlerModel = async ({ uid, data, userCollection }) => {
  const {
    stripe_bank_access_token,
    plaid_bank_access_token,
  } = await plaidAdmin.bankAccessTokenCreate({ token: data.token, id: data.bank.id });
  const user = await userGetHandler({ data: { _id: uid }, userCollection });

  const bank = new Bank();
  bank.id = data.bank.id;
  bank.name = data.bank.name;
  bank.institution_id = data.bank.institution_id;
  bank.institution_name = data.bank.institution_name;
  bank.stripe_bank_access_token = stripe_bank_access_token;
  bank.plaid_bank_access_token = plaid_bank_access_token;

  user.banks = [...(user.banks || []), bank];
  await userCollection.save(user);
  return {};
};

import { accountGetHandler } from '@lib/backend/account/handlers';
import { BankAccount } from '@lib/backend/billing/database/bankAccount.entity';
import { BankAccountAddHandlerModel } from '@lib/backend/billing/handlers/bankAccountAdd/bankAccountAdd.model';
import { plaidAdmin } from '@lib/backend/billing/utils/PlaidAdmin/PlaidAdmin';

export const bankAccountAddHandler: BankAccountAddHandlerModel = async ({
  data,
  accountCollection,
}) => {
  const {
    stripe_bank_access_token,
    plaid_bank_access_token,
  } = await plaidAdmin.bankAccessTokenCreate({
    token: data.token,
    accountId: data.bankAccount.id,
  });
  const account = await accountGetHandler({
    data: { _id: data.accountId },
    accountCollection,
  });

  const bankAccount = new BankAccount();
  bankAccount.id = data.bankAccount.id;
  bankAccount.name = data.bankAccount.name;
  bankAccount.institution_id = data.bankAccount.institution_id;
  bankAccount.institution_name = data.bankAccount.institution_name;
  bankAccount.stripe_bank_access_token = stripe_bank_access_token;
  bankAccount.plaid_bank_access_token = plaid_bank_access_token;

  account.bankAccounts = [...(account.bankAccounts || []), bankAccount];
  await accountCollection.save(account);
  return {};
};

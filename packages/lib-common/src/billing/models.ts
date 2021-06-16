export interface BankAccountModel {
  id: string;
  name: string;
  institution_id: string;
  institution_name: string;
  stripe_bank_access_token?: string;
  plaid_bank_access_token?: string;
}

export interface BankLinkTokenCreateRequestModel {
  accountId: string;
}

export interface BankLinkTokenCreateResponseModel {
  token: string;
  exp: string;
}

export interface BankAccountAddRequestModel {
  accountId: string;
  token: string;
  bankAccount: BankAccountModel;
}

export interface BankAccountAddResponseModel {}

export interface bankAccessTokenCreateRequestModel {
  token: string;
  accountId: string;
}

export interface bankAccessTokenCreateResponseModel {
  plaid_bank_access_token: string;
  stripe_bank_access_token: string;
}

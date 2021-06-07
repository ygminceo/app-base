export interface BankTokenLinkCreateRequest {
  account_id: string;
}

export interface BankTokenLinkCreateResponse {
  token: string;
  exp: string;
}

export interface BankAccountClass {
  id: string;
  name: string;
  institution_id: string;
  institution_name: string;
  stripe_bank_access_token?: string;
  plaid_bank_access_token?: string;
}

export interface BankAccountAddRequest {
  account_id: string;
  token: string;
  bankAccount: BankAccountClass;
}

export interface BankAccountAddResponse {}

export interface BankTokenAccessCreateRequest {
  token: string;
  account_id: string;
}

export interface BankTokenAccessCreateResponse {
  plaid_bank_access_token: string;
  stripe_bank_access_token: string;
}

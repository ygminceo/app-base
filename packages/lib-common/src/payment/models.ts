// Payment methods
export interface PaymentMethodsGetRequestModel {
  accountId: string;
}

export interface PaymentMethodsGetResponseModel {}

// Bank account
export interface BankTokenLinkCreateRequestModel {
  accountId: string;
}

export interface BankTokenLinkCreateResponseModel {
  token: string;
  exp: string;
}

export interface BankAccountModel {
  id: string;
  name: string;
  institution_id: string;
  institution_name: string;
  stripe_bank_access_token?: string;
  plaid_bank_access_token?: string;
}

export interface BankAccountAddRequestModel {
  accountId: string;
  token: string;
  bankAccount: BankAccountModel;
}

export interface BankAccountAddResponseModel {}

export interface BankTokenAccessCreateRequestModel {
  token: string;
  accountId: string;
}

export interface BankTokenAccessCreateResponseModel {
  plaid_bank_access_token: string;
  stripe_bank_access_token: string;
}

// Card
export interface CardAddRequestModel {}

export interface CardAddResponseModel {}

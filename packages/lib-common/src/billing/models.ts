// Bank
export interface BankModel {
  id: string;
  name: string;
  institution_id: string;
  institution_name: string;
  stripe_bank_access_token?: string;
  plaid_bank_access_token?: string;
}

export interface BankLinkTokenCreateResponseModel {
  token: string;
  exp: string;
}

export interface BankAddRequestModel {
  token: string;
  bank: BankModel;
}

export interface BankAddResponseModel {}

export interface BankAccessTokenCreateRequestModel {
  token: string;
  id: string;
}

export interface BankAccessTokenCreateResponseModel {
  plaid_bank_access_token: string;
  stripe_bank_access_token: string;
}

// Card
export interface CardModel {
  id: string;
  brand: string;
  exp_month: number;
  exp_year: number;
  last4: string;
}

export interface CardTokenGetResponseModel {
  id: string;
  token: string;
}

export interface CardAddRequestModel extends CardModel {}

export interface CardAddResponseModel {}

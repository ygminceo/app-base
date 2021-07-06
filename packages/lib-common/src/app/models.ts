export interface ContactModel {
  email: string;
  detail?: string;
}

export interface ContactAddRequestModel extends ContactModel {}

export interface ContactFormModel extends ContactAddRequestModel {}

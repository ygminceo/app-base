export interface ContactRequestModel {
  email: string;
  detail?: string;
}

export interface ContactFormModel extends ContactRequestModel {}

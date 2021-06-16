export interface MailModel {
  from: string;
  to: string[];
  bcc?: string[];
  subject: string;
  html: string;
}

export interface MailerModel {
  send(mail: MailModel): Promise<void>;
}

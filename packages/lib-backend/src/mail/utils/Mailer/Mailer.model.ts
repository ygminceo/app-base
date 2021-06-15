export interface MailType {
  from: string;
  to: string[];
  bcc?: string[];
  subject: string;
  html: string;
}

export interface MailerModel {
  send(mail: MailType): Promise<void>;
}

export interface MailType {
  from: string;
  to: string[];
  bcc?: string[];
  subject: string;
  html: string;
}

export interface MailerClass {
  send(mail: MailType): Promise<void>;
}

export interface MailModel<P> {
  from: string;
  to: string[];
  template: string;
  params: P;
}

export interface MailerModel {
  send(mail: MailModel<any>): Promise<void>;
}

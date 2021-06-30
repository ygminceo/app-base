export interface MailModel<P> {
  from: string;
  to: string[];
  template: string;
  params: P;
}

export interface MailerModel {
  send<P>(mail: MailModel<P>): Promise<void>;
}

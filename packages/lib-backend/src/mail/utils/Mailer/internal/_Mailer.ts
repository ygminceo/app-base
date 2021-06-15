import { _MailerModel } from '@lib/backend/mail/utils/Mailer/internal/_Mailer.model';
import { MailType } from '@lib/backend/mail/utils/Mailer/Mailer.model';
import { createTransport, Transporter } from 'nodemailer';

export class _Mailer implements _MailerModel {
  private _transporter: Transporter;

  constructor() {
    this._transporter = createTransport({
      pool: true,
      host: 'smtp.elasticemail.com',
      port: 2525,
      auth: {
        user: 'ygminceo@gmail.com',
        pass: '14854BCEBAA51B4557AF4DBFCC138242021A',
      },
    });
  }

  async send({ from, to, bcc, subject, html }: MailType) {
    return new Promise<void>((resolve, reject) =>
      this._transporter.sendMail({ from, to, bcc, subject, html }, (e) =>
        e ? reject(e) : resolve(),
      ),
    );
  }
}

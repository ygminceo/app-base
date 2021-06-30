import Email from 'email-templates';
import { createTransport, Transporter } from 'nodemailer';
import { resolve } from 'path';
import { MailModel } from '@lib/backend/mail/utils/Mailer/Mailer.model';
import { _MailerModel } from '@lib/backend/mail/utils/Mailer/internal/_Mailer.model';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';
import { ROOT_PATH } from '../../../../../../../constants';

const TEMPLATE_DIR = resolve(ROOT_PATH, 'packages/lib-assets/src/mail/templates');

export class _Mailer implements _MailerModel {
  private _transport: Transporter;

  constructor() {
    // TODO: env
    this._transport = createTransport({
      pool: true,
      host: 'smtp.elasticemail.com',
      port: 2525,
      auth: {
        user: 'ygminceo@gmail.com',
        pass: '14854BCEBAA51B4557AF4DBFCC138242021A',
      },
    });
  }

  async send<P>({ from, to, template, params }: MailModel<P>) {
    return new Email({
      preview: Platform.isDev,
      transport: this._transport,
      views: { root: TEMPLATE_DIR },
    }).send({
      template,
      message: { from, to },
      locals: params,
    });
  }
}

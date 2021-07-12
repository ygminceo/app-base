import Email from 'email-templates';
import { createTransport, Transporter } from 'nodemailer';
import { resolve } from 'path';
import { config } from '@lib/common/core/utils/Config/Config';
import { MailModel } from '@lib/backend/mail/utils/Mailer/Mailer.model';
import { _MailerModel } from '@lib/backend/mail/utils/Mailer/internal/_Mailer.model';
import { ROOT_PATH } from '../../../../../../../constants';

// TODO: this is AWS only
const TEMPLATE_ROOT =
  process.env.NODE_ENV === 'production'
    ? config.get<string>('LAMBDA_TASK_ROOT', null)
    : resolve(ROOT_PATH, 'packages/lib-assets/src');

const TEMPLATE_DIR = resolve(TEMPLATE_ROOT, 'mail/templates');

const NODE_ENV = config.get<string>('NODE_ENV', null);

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
      preview: NODE_ENV === 'development',
      transport: this._transport,
      views: { root: TEMPLATE_DIR },
    }).send({
      template,
      message: { from, to },
      locals: params,
    });
  }
}

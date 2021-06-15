import { MailSendHandlerModel } from '@lib/backend/mail/handlers/mailSend/mailSend.model';

// export const mailSendHandler: MailSendHandlerModel = async ({ mail, mailer }) => mailer.send(mail);
export const mailSendHandler: MailSendHandlerModel = async ({ mail, mailer }) => {
  console.warn('mail sent');
  return mailer.send(mail);
};

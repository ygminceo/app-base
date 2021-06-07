import { sendFunction } from '@lib/backend/mail/handlers/send/send.model';

export const sendHandler: sendFunction = async ({ mail, mailer }) => mailer.send(mail);

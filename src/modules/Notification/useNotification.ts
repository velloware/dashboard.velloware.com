import { NotificationSend, INotification } from './Notification';
import { Telegraf } from '../../infra/Telegraf/telegraf';
import dotenv from 'dotenv';

dotenv.config();

export class SendNotification {
  static async send(TextToSend: string): Promise<void> {

    const NoSendNotificationProps: INotification = {
      message: TextToSend,
      data: {},
    };

    const Token = String(process.env.BOT_TOKEN) || 'BOT_TOKEN_HERE';
    const ChatId = String(process.env.CHAT_ID) || 'CHAT_ID_HERE';

    new NotificationSend(new Telegraf(Token), ChatId).sendNotification(NoSendNotificationProps);

  }
}

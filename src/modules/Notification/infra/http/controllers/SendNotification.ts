import { Response, Request } from 'express';
import { NotificationSend, INotification } from '../../../Notification';
import { Telegraf } from '../../../../../infra/Telegraf/telegraf';

export class SendNotification {
  public async send(
    request: Request,
    response: Response,
  ): Promise<Response> {

    const NoSendNotificationProps: INotification = request.body;

    const Token = String(process.env.BOT_TOKEN) || 'BOT_TOKEN_HERE';
    const ChatId = String(process.env.CHAT_ID) || 'CHAT_ID_HERE';

    new NotificationSend(new Telegraf(Token), ChatId).sendNotification({
      message: NoSendNotificationProps.message,
      data: {},
    });

    return response.json({
      "message": "send"
    });
  }

  public async sendWebhook(
    request: Request,
    response: Response,
  ): Promise<Response> {

    const NoSendNotificationProps: INotification = request.body;

    const Token = String(process.env.BOT_TOKEN) || 'BOT_TOKEN_HERE';
    const ChatId = String(process.env.CHAT_ID) || 'CHAT_ID_HERE';

    new NotificationSend(new Telegraf(Token), ChatId).sendNotification({
      message: NoSendNotificationProps.message,
      data: NoSendNotificationProps.data,
    });

    return response.json({
      "message": "send"
    });
  }
}

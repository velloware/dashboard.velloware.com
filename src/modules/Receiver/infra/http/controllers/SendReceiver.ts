import { Response, Request } from 'express';
import { ReceiverSend, IReceiver } from '../../../Receiver';
import { Telegraf } from '../../../../../infra/Telegraf/telegraf';

export class SendReceiver {
  public async send(
    request: Request,
    response: Response,
  ): Promise<Response> {

    const ReceiverProps: IReceiver = request.body;

    const Token = String(process.env.BOT_TOKEN) || 'BOT_TOKEN_HERE';
    const ChatId = String(process.env.CHAT_ID) || 'CHAT_ID_HERE';

    const receiverSend = new ReceiverSend(new Telegraf(Token), ChatId);
    const reciverSending = await receiverSend.sendReceiver(ReceiverProps);

    return response.json({
      "message": "send"
    });
  }
}

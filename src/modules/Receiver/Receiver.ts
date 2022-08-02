import { Receiver, IReceiver } from './Domain/Receiver';
export { IReceiver } from './Domain/Receiver';
import { ISend, ITelefraf } from '../../shared/Interfaces/ITelegramSender';

export class ReceiverSend {

  protected Sender: ITelefraf;
  private ChatId: string;

  constructor(sender: ITelefraf, ChatId?: string) {
    this.Sender = sender;
    this.ChatId = ChatId || '';
  }

  public async sendReceiver(ReceiverProps: IReceiver, ChatId?: string): Promise<ISend> {

    if (this.ChatId == '' && ChatId) {
      return await this.Sender.send(new Receiver(ReceiverProps).touchFormatter(), ChatId);
    } else {
      return await this.Sender.send(new Receiver(ReceiverProps).touchFormatter(), this.ChatId);
    }

  }

}
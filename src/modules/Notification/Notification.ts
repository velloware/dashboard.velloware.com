import { INotification, Notification } from './Domain/Notification';
export { INotification } from './Domain/Notification';
import { ISend, ITelefraf } from '../../shared/Interfaces/ITelegramSender';

export class NotificationSend {

  protected Sender: ITelefraf;
  private ChatId: string;

  constructor(sender: ITelefraf, ChatId?: string) {
    this.Sender = sender;
    this.ChatId = ChatId || '';
  }

  public async sendNotification(NotificationProps: INotification, ChatId?: string): Promise<ISend> {

    if (this.ChatId == '' && ChatId) {
      return await this.Sender.send(new Notification(NotificationProps).touchFormatter(), ChatId);
    } else {
      return await this.Sender.send(new Notification(NotificationProps).touchFormatter(), this.ChatId);
    }

  }

}
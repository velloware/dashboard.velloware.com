import { Telegram } from 'telegraf';
import { ITelefraf, ISend } from './ITelegraf';

export class Telegraf extends Telegram implements ITelefraf {
    private botToken: string;
    constructor(TOKEN: string) {
        super(TOKEN);
        this.botToken = TOKEN;
    }

    /**
     * Send message into telegram to chatId
     * @param message  Message to send.
     * @param chatId Telegram ChatId.
     */
    public async send(message: string, chatId: string): Promise<ISend> {
        const messageSended = await this.sendMessage(chatId, message);

        return {
            botToken: this.botToken,
            chatId: messageSended.chat.id.toString(),
            chatType: messageSended.chat.type,
            messageId: messageSended.message_id,
        };
    }

    /**
     * Update message sended
     * @param chatId Telegram ChatId.
     * @param messageId  MessageId to Update.
     * @param textUpdated  text to Update.
     */
    public async update(chatId: string, messageId: number, textUpdated: string): Promise<void> {
        await this.editMessageText(chatId, messageId, `${messageId}`, textUpdated);
    }
}
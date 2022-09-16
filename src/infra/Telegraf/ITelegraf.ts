export interface ISend {
  botToken?: string;
  chatId: string;
  chatType: string;
  messageId: number;
}

export interface ITelefraf {
  send(message: string, chatId: string): Promise<ISend>;
  update(chatId: string, messageId: number, textUpdated: string): Promise<void>
}
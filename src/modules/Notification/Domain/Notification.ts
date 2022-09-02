export interface INotification {
  message: string;
}

export class Notification {

  protected message: string;

  constructor(Dates: INotification) {
    this.message = Dates.message;
  }

  public touchFormatter(): string {
    return `🔔Vello-Dash 🐱‍👤
${this.message}
    `;
  }

}
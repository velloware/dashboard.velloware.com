interface IData {
  [key: string]: string | number | boolean | string[] | number[] | boolean[];
}

export interface INotification {
  message: string;
  data: IData;
}

export class Notification {

  protected message: string;
  protected data: IData;

  constructor(Dates: INotification) {
    this.message = Dates.message;
    this.data = Dates.data;
  }

  private touchFormatterData(): string {

    if (Object.keys(this.data).length == 0) {
      return '';
    }

    let message = '\n';
    Object.keys(this.data).forEach((key) => {
      message = message + `${key}: ${this.data[key]}` + "\n";
    });

    return message;
  }

  public touchFormatter(): string {

    const messageFormatter = `
    🔹Velloware Dashboard🔹
${this.message || ''}
${this.touchFormatterData()}
`;

    return messageFormatter;
  }

}

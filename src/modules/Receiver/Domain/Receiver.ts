export interface IReceiver {
  name: string;
  email: string;
  phone: string; 
  message: string;
}

export class Receiver {

  protected name: string;
  protected email: string;
  protected phone: string;
  protected message: string;

  constructor(Dates: IReceiver) {
    this.name = Dates.name;
    this.phone = Receiver.PhoneValid(Dates.phone);
    this.email = Dates.email;
    this.message = Dates.message;
  }

  static PhoneValid(phoneRaw: string): string {
    return phoneRaw.replace(/\D/gm, '');
  }

  public touchFormatter(): string {
    return `✉Novo contado📩\n
Nome: ${this.name}\n
Phone: ${this.phone}\n
Email: ${this.email}\n

Messagem: ${this.message}\n`;
  }

}
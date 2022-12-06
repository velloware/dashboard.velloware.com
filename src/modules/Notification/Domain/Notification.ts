import { Alert } from '../../Alerts/Alert';
import { NewRelicAlert } from '../../Alerts/Domain/NewRelicAlert';

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
    let data = '';
    if (this.data.newrelic == true) {
      const newRelicMessage = new NewRelicAlert({
        id: String(this.data.id),
        issueUrl: String(this.data.issueUrl),
        title: String(this.data.title),
        priority: String(this.data.priority),
        impactedEntities: String(this.data.impactedEntities),
        totalIncidents: Number(this.data.totalIncidents),
        state: String(this.data.state),
        trigger: String(this.data.trigger),
        isCorrelated: Boolean(this.data.isCorrelated),
        createdAt: String(this.data.createdAt),
        updatedAt: String(this.data.updatedAt),
        sources: String(this.data.sources),
        alertPolicyNames: String(this.data.alertPolicyNames),
        alertConditionNames: String(this.data.alertConditionNames),
        workflowName: String(this.data.workflowName)
      })

      data = new Alert(newRelicMessage).alertMessage;
    } else {
      data = this.touchFormatterData();
    }

    const messageFormatter = `
    🔹Velloware Dashboard🔹
${this.message || ''}
${data}
`;

    return messageFormatter;
  }

}

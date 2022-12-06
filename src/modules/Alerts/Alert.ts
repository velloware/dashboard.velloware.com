import { NewRelicAlert } from './Domain/NewRelicAlert';

export class Alert {

  constructor(private alert: NewRelicAlert) { }

  get alertMessage() {
    return `\nAlert: ${this.alert.title}
Priority: ${this.alert.priority}
State: ${this.alert.state} ${this.alert.state === 'ACTIVATED' ? '🟢' : '🔴'}
Impacted Entities: ${this.alert.impactedEntities}
Total Incidents: ${this.alert.totalIncidents}
Trigger: ${this.alert.trigger}
Is Correlated: ${this.alert.isCorrelated}
Created At: ${new Date(String(this.alert.createdAt))}
Sources: ${this.alert.sources}`;
  }
}
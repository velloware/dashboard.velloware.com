export interface INewRelicAlert {
  id: string;
  issueUrl: string;
  title: string;
  priority: string;
  impactedEntities: string;
  totalIncidents: number;
  state: string;
  trigger: string;
  isCorrelated: boolean;
  createdAt: string;
  updatedAt: string;
  sources: string;
  alertPolicyNames: string;
  alertConditionNames: string;
  workflowName: string;
}

export class NewRelicAlert {
  private alert: INewRelicAlert;

  constructor(alert: INewRelicAlert) {
    this.alert = alert;
  }

  get id() {
    return this.alert.id;
  }

  get issueUrl() {
    return this.alert.issueUrl;
  }

  get title() {
    return this.alert.title;
  }

  get priority() {
    return this.alert.priority;
  }

  get impactedEntities() {
    return this.alert.impactedEntities;
  }

  get totalIncidents() {
    return this.alert.totalIncidents;
  }

  get state() {
    return this.alert.state;
  }

  get trigger() {
    return this.alert.trigger;
  }

  get isCorrelated() {
    return this.alert.isCorrelated;
  }

  get createdAt() {
    return this.alert.createdAt;
  }

  get updatedAt() {
    return this.alert.updatedAt;
  }

  get sources() {
    return this.alert.sources;
  }

  get alertPolicyNames() {
    return this.alert.alertPolicyNames;
  }

  get alertConditionNames() {
    return this.alert.alertConditionNames;
  }

  get workflowName() {
    return this.alert.workflowName;
  }

  get isCritical() {
    return this.alert.priority === 'critical';
  }

  get isWarning() {
    return this.alert.priority === 'warning';
  }

  get isInfo() {
    return this.alert.priority === 'info';
  }

  get isOk() {
    return this.alert.state === 'closed';
  }

  get isNotOk() {
    return this.alert.state === 'open';
  }

  get isTriggered() {
    return this.alert.trigger === 'triggered';
  }

  get isNotTriggered() {
    return this.alert.trigger === 'not_triggered';
  }

  get isCorrelatedAlert() {
    return this.alert.isCorrelated;
  }

  get isNotCorrelatedAlert() {
    return !this.alert.isCorrelated;
  }
}
export interface IApplication {
  pid: number;
  pm_id: number;
  name: string;
  mode: string;
  restartCount: number;
  status: string;//
  version?: string;
  uptime: number;
  memory: number;
  cpu: number;
  serverName: string;
}


export class Application {

  public pid: number;
  public pm_id: number;
  public name: string;
  public mode: string;
  public restartCount: number;
  public status: string;
  public version: string;
  public uptime: number;
  public memory: number;
  public cpu: number;
  public serverName: string;

  constructor(ApplicationProps: IApplication) {
    this.pid = Number(ApplicationProps.pid);
    this.pm_id = Number(ApplicationProps.pm_id);
    this.name = ApplicationProps.name;
    this.mode = ApplicationProps.mode;
    this.restartCount = ApplicationProps.restartCount;
    this.status = ApplicationProps.status;
    this.version = ApplicationProps.version || '';
    this.uptime = ApplicationProps.uptime;
    this.memory = ApplicationProps.memory;
    this.cpu = ApplicationProps.cpu;
    this.serverName = ApplicationProps.serverName;
  }

}
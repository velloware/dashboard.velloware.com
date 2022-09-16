import { execSync } from 'child_process';
import { Application } from '../Application/Domain/Application';

interface IRawJlist {
  pid: number;
  name: string;
  pm2_env: {
    node_version: string;
    versioning: {
      update_time: string;
    };
    version: string;
    restart_time: number;
    status: string;
    pm_id: number;
    exec_mode: string;
    env: any;
    instances: number;
  },
  monit: {
    memory: number;
    cpu: number;
  },
}

const getRawProps = (): IRawJlist[] => {
  // const rawOutout = execSync('pm2 jlist');
  const rawOutout = execSync('cat src/modules/Status/Test/Mock/jlist.json');
  const JLIST: IRawJlist[] = JSON.parse(rawOutout.toString());
  return JLIST;
}

export const getApplications = (RawObj: IRawJlist[] = getRawProps()): Application[] => {
  return RawObj.map((rawApp: IRawJlist) => new Application({
    pid: rawApp.pid,
    pm_id: rawApp.pm2_env.pm_id,
    name: rawApp.name,
    mode: rawApp.pm2_env.exec_mode,
    restartCount: rawApp.pm2_env.restart_time,
    status: rawApp.pm2_env.status,
    version: rawApp.pm2_env.version,
    uptime: new Date().getTime() - new Date(rawApp.pm2_env.versioning.update_time).getTime(),
    memory: rawApp.monit.memory,
    cpu: rawApp.monit.cpu,
    serverName: 'vello-1',
  }));
}


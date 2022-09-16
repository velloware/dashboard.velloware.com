import { getApplications } from './Application/Applications';
import { Application } from './Application/Domain/Application';
import { SendNotification } from '../Notification/useNotification';
import cron from 'node-cron';

let LogErrorSendeds: Number[] = [];

cron.schedule('* * * * *', async () => {
  getApplications().map((app: Application) => {
    if (app.status !== 'online' && !LogErrorSendeds.includes(app.pid)) {
      SendNotification.send(`
❗Application {${app.name}} is ${app.status}❗

Server: ${app.serverName}
Uptime: ${app.uptime}
Restart Count: ${app.restartCount}
CPU: ${app.cpu}
Memory: ${app.memory}
Mode: ${app.mode}`);

      LogErrorSendeds.push(app.pid);
    } else if (app.status === 'online' && LogErrorSendeds.includes(app.pid)) {
      SendNotification.send(`
💹Application {${app.name}} is ${app.status}💹
      
Server: ${app.serverName}
Uptime: ${app.uptime}
Restart Count: ${app.restartCount}
CPU: ${app.cpu}
Memory: ${app.memory}
Mode: ${app.mode}`);

      LogErrorSendeds = LogErrorSendeds.filter((pid: Number) => pid !== app.pid);

    }


  });

});

cron.schedule('0 0 */1 * * *', async () => {
  LogErrorSendeds.length = 0;
});


cron.schedule('0 0 */6 * * *', async () => {
  getApplications().map((app: Application) => {
    SendNotification.send(`Application Report - ${app.name} is ${app.status}

Server: ${app.serverName}
Uptime: ${app.uptime}
Restart Count: ${app.restartCount}
CPU: ${app.cpu}
Memory: ${app.memory}
Mode: ${app.mode}`);
  });

});
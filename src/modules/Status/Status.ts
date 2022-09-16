import { getApplications } from './Application/Applications';
import { Application } from './Application/Domain/Application';
import { SendNotification } from '../Notification/useNotification';
import cron from 'node-cron';

cron.schedule('* * * * *', async () => {
  console.log('running a task every minute');

  getApplications().map((app: Application) => {
    if (app.status !== 'online') {
      SendNotification.send(`❗ Application ${app.name} is ${app.status}
Server: ${app.serverName}
Uptime: ${app.uptime}
Restart Count: ${app.restartCount}
CPU: ${app.cpu}
Memory: ${app.memory}
Mode: ${app.mode}`);
    }
  });

});


cron.schedule('0 0 */6 * * *', async () => {
  console.log('running a task every minute');

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
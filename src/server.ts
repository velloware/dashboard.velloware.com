import dotenv from 'dotenv';
import ServerHttp from './infra/http/server';
import { checkStatus } from './modules/Status/Status';

dotenv.config();

process.title = 'Velloware Dash - server';

const serverHttp = new ServerHttp(process.env.PORT || '5000');

serverHttp.init();
checkStatus();

process.on('SIGTERM', () => {
  console.log('> Server ending after close all connections - ', new Date().toISOString());
  serverHttp.close(() => process.exit());
});

process.on('SIGINT', () => {
  console.log('> Server ending now! - ', new Date().toISOString());
  process.exit();
});
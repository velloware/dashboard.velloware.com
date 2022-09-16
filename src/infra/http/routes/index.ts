import {
  Router, Response,
} from 'express';
import 'express-async-errors';

import Receiver from './Receiver.routes';
import Notification from './Notification.routes';

export const routesCreator = Router();

const routes = Router();

routes.use('/receiver', Receiver);
routes.use('/notification', Notification);
routes.use('/status', Notification);

routes.use('/', (response: Response) => {
  response.send({
    message: 'Welcome',
    status: 'ONLINE',
    version: '1.0.0',
    documentation: '/docs',
  });
});

export default routes;
import {
  Router, Response,
} from 'express';
import 'express-async-errors';

import Receiver from './Receiver.routes';

export const routesCreator = Router();

const routes = Router();

routes.use('/receiver', Receiver);

routes.use('/', (response: Response) => {
  response.send({
    message: 'Welcome',
    status: 'ONLINE',
    version: '1.0.0',
    documentation: '/docs',
  });
});

export default routes;